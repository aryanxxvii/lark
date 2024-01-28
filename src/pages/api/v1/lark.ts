import { withMethods } from "@/lib/api-middlewares/with-methods"
import { db } from "@/lib/db"
import { NextApiRequest, NextApiResponse } from "next"
import { z } from "zod"
import axios from "axios"

const reqSchema = z.object({
  wavData: z.string().max(10000000),
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body as unknown
  const apiKey = req.headers.authorization
  if (!apiKey) {
    return res.status(401).json({ error: "Unauthorized" })
  }

  try {
    const validApiKey = await db.apiKey.findFirst({
      where: {
        key: apiKey,
        enabled: true,
      },
    })
    if (!validApiKey) {
      return res.status(401).json({ error: "Unauthorized" })
    }
    const HF_SPACE = process.env.HF_SPACE as string
    const { wavData } = reqSchema.parse(body)

    // const gradioApp = await client(HF_SPACE);
    const startTime = new Date()
    // const result = (await gradioApp.predict("/api/predict", [wavData])) as any;
    const dataSend = { data: [wavData] }

    // const response = await fetch(HF_SPACE, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(wavData),
    // });
    // const responseData = await response.json();

    const response = await axios.post(HF_SPACE, dataSend)

    const data = response.data.data

    const [similarity_score, ielts_band, phonetic_transcription] = data

    const duration = new Date().getTime() - startTime.getTime()
    await db.apiRequest.create({
      data: {
        duration,
        method: req.method as string,
        path: req.url as string,
        status: 200,
        apiKeyId: validApiKey.id,
        usedApiKey: validApiKey.key,
      },
    })

    return res.status(200).json({
      success: true,
      similarity_score,
      ielts_band,
      phonetic_transcription,
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.issues })
    }
    return res.status(500).json({ error: "Internal Server Error" })
  }
}

export default withMethods(["POST"], handler)

// Send {"data": ["BASE64_WAV_DATA"]}
