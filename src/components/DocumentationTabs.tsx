"use client"

import { nodejs, python, output } from "@/helpers/documentation-code"
import { FC } from "react"
import SimpleBar from "simplebar-react"
import Code from "@/components/ui/Code"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"
import Paragraph from "./ui/Paragraph"
import LargeHeading from "./ui/LargeHeading"

const DocumentationTabs: FC = () => {
  return (
    <Tabs defaultValue="nodejs" className="mb-40 max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="nodejs">NodeJS</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
        <TabsTrigger value="output">Sample Output</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs">
        <Code animated code={nodejs} language="javascript" show />
      </TabsContent>
      <TabsContent value="python">
        <Code animated code={python} language="python" show />
      </TabsContent>
      <TabsContent value="output">
        <Code animated code={output} language="json" show />
      </TabsContent>
    </Tabs>
  )
}

export default DocumentationTabs
