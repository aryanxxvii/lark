import { FC } from "react";

import type { Metadata } from "next";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import DocumentationTabs from "@/components/DocumentationTabs";
export const metadata: Metadata = {
  title: "Lark API | Documentation",
  description: "Open-source pronunciation assessment API",
};

const page: FC = ({}) => {
  return (
    <div className="container items-center justify-center max-w-7xl mx-auto mt-12">
      <div className="flex flex-col items-center gap-2">
        <LargeHeading
          size="sm"
        >
          Making a request
        </LargeHeading>
        <Paragraph className="mb-2">api/v1/lark</Paragraph>
        <DocumentationTabs />
      </div>
    </div>
  );
};

export default page;
