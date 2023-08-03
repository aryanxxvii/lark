import Image from "next/image"
import Link from "next/link"
import LargeHeading from "@/components/ui/LargeHeading"
import Paragraph from "@/components/ui/Paragraph"

import type { Metadata } from "next"
import { buttonVariants } from "@/components/ui/Button"
import { Content, contentVariants } from "@/components/ui/Content"

export const metadata: Metadata = {
  title: "Lark API | Home",
  description: "Open-source pronunciation assessment API",
}
export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-x-hidden">
      <div className="transition-all duration-300 h-screen container bg-gradient-to-tr  from-perfume-50 via-perfume-50 to-perfume-400/60 dark:from-minsk-900 dark:via-minsk-900/30 via-60% dark:to-purple-700/40 to-100% max-w-full w-full mx-auto p-0">
        <div className="h-screen container  max-w-full w-full mx-auto ">
          <div className="py-32 pb-40 h-screen gap-10 flex flex-col text-center justify-center lg:justify-center items-center lg:items-center">
            <div className="flex gap-4">
              <Link
                href="https://github.com/aryanxxvii/lark"
                className={`${buttonVariants({ variant: "badge" })}`}
              >
                GitHub Repo
              </Link>
              <Link
                href="/documentation"
                className={`${buttonVariants({ variant: "badge" })}`}
              >
                Visit Documentation
              </Link>
            </div>

            <LargeHeading
              size="lg"
              className="animate-text duration-6000 text-transparent from-purple-400 from-0% via-perfume-400 via-50% to-pink-400 to-100% bg-gradient-to-l bg-clip-text  dark:from-indigo-500 dark:via-minsk-200 dark:to-minsk-400 dark:bg-gradient-to-r dark:bg-clip-text"
            >
              Easily grade <br /> speech samples.
            </LargeHeading>

            <Paragraph className="max-w-xl lg:text-center">
              <span className="selection:bg-transparent dark:selection:bg-transparent text-transparent from-purple-400 from-0% via-perfume-400 via-50% to-pink-400 to-100% bg-gradient-to-l bg-clip-text  dark:from-indigo-500 dark:via-minsk-300 dark:to-minsk-400 dark:bg-gradient-to-r dark:bg-clip-text font-bold">
                Lark API{" "}
              </span>
              is an API designed to analyze and grade voice samples based on the
              pronunciation of words.
              <br />
            </Paragraph>
            <Paragraph className="!dark:text-minsk-100" size="sm">
              Get your API key today to integrate Lark into your project!
            </Paragraph>
            <Link
              href="/login"
              className={`${buttonVariants({ variant: "hero" })}`}
            >
              API Key {">"}
            </Link>
          </div>
        </div>
      </div>
      <div className="min-h-screen container max-w-full w-full mx-auto">
        <div className="min-h-screen gap-10 flex flex-col text-center justify-center lg:justify-center items-center lg:items-center">
          <div className="pt-16 flex flex-col lg:flex-row gap-x-24 gap-y-12 mx-auto justify-center items-center">
            <LargeHeading size="default">Feature set</LargeHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y-0 gap-10 max-w-4xl  text-center justify-center items-center">
              <div className="flex flex-col gap-6 text-center justify-center items-center">
                <Content className={contentVariants({ variant: "content" })}>
                  <Paragraph
                    size="default"
                    className="!dark:text-minsk-100 mb-2"
                  >
                    Detailed Breakdown
                  </Paragraph>
                  By analyzing voice samples, Lark.API provides a detailed
                  breakdown of errors, pinpointing specific areas of
                  improvement. From mispronunciations to intonation issues, our
                  API provides comprehensive feedback, empowering learners to
                  enhance their pronunciation skills effectively.
                </Content>
                <Content className={contentVariants({ variant: "content" })}>
                  <Paragraph
                    size="default"
                    className="!dark:text-minsk-100 mb-2"
                  >
                    IELTS Score Estimation
                  </Paragraph>
                  With Lark.API, learners can get an estimation of their
                  potential score on the International English Language Testing
                  System (IELTS). Our API correlates pronunciation performance
                  with IELTS criteria, allowing users to gauge their language
                  proficiency and work towards achieving their desired scores.
                </Content>
              </div>
              <div className="flex flex-col gap-6 text-center justify-center items-center">
                <Content className={contentVariants({ variant: "content" })}>
                  <Paragraph
                    size="default"
                    className="!dark:text-minsk-100 mb-2"
                  >
                    Real-time Assessment
                  </Paragraph>
                  Lark.API delivers real-time assessment, making it ideal for
                  language learning platforms, educational institutions, and
                  language tutors. Users can receive instant feedback on their
                  pronunciation, enabling them to make immediate adjustments and
                  monitor their progress over time.
                </Content>
                <Content className={contentVariants({ variant: "content" })}>
                  <Paragraph
                    size="default"
                    className="!dark:text-minsk-100 mb-2"
                  >
                    Seamless Integration
                  </Paragraph>
                  Integrating Lark.API into your application or platform is
                  seamless. We offer comprehensive documentation and client
                  libraries in multiple programming languages, ensuring
                  hassle-free integration and quick deployment.
                </Content>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
