import Image from "next/image";
import Link from "next/link";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";

import type { Metadata } from "next";
import { buttonVariants } from "@/components/ui/Button";
import { Content, contentVariants } from "@/components/ui/Content";
export const metadata: Metadata = {
  title: "Lark API | Home",
  description: "Open-source pronunciation assessment API",
};
export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-x-hidden">
      <div className="transition-all duration-300 h-screen container bg-gradient-to-t from-perfume-50 via-perfume-50 to-perfume-200/60 dark:from-minsk-900 dark:via-minsk-900 dark:to-minsk-800  max-w-full w-full mx-auto p-0">
        <div className="h-screen container bg-light-layered-waves dark:bg-dark-layered-waves bg-cover max-w-full w-full mx-auto ">
          <div className="pb-40 h-screen gap-10 flex flex-col text-center justify-center lg:justify-center items-center lg:items-center">
            <LargeHeading
              size="lg"
              className="animate-text duration-6000 text-transparent from-purple-400 from-0% via-perfume-400 via-50% to-pink-400 to-100% bg-gradient-to-l bg-clip-text  dark:from-indigo-500 dark:via-minsk-300 dark:to-minsk-400 dark:bg-gradient-to-r dark:bg-clip-text"
            >
              Easily grade <br /> voice samples.
            </LargeHeading>

            <Paragraph className="max-w-xl lg:text-center">
              <span className="selection:bg-transparent dark:selection:bg-transparent text-transparent from-purple-400 from-0% via-perfume-400 via-50% to-pink-400 to-100% bg-gradient-to-l bg-clip-text  dark:from-indigo-500 dark:via-minsk-300 dark:to-minsk-400 dark:bg-gradient-to-r dark:bg-clip-text font-bold">Lark API </span>is an API designed
              to analyze and grade voice samples based on the pronunciation of
              words.
              <br />
            </Paragraph>

            <Link
              href="/login"
              className={`${buttonVariants({ variant: "bordergrad" })}`}
            >
              API Key
            </Link>
          </div>
        </div>
      </div>
      <div className="min-h-screen container max-w-full w-full mx-auto ">
        <div className="min-h-screen gap-10 flex flex-col text-center justify-center lg:justify-center items-center lg:items-center">
          <div className="pt-16 flex flex-col lg:flex-row gap-x-24 gap-y-4 mx-auto justify-center items-center">
            <LargeHeading
              size="default"
            >
              Feature set
            </LargeHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y-0 gap-10 max-w-4xl text-center justify-center items-center">
              <div className="flex flex-col gap-6 text-center justify-center items-center">
                <Content className={contentVariants({ variant: "content" })}>
                  By analyzing voice samples, Lark.API provides a detailed
                  breakdown of errors, pinpointing specific areas of
                  improvement. From mispronunciations to intonation issues, our
                  API provides comprehensive feedback, empowering learners to
                  enhance their pronunciation skills effectively.
                </Content>
                <Content className={contentVariants({ variant: "content" })}>
                  With Lark.API, learners can get an estimation of their
                  potential score on the International English Language Testing
                  System (IELTS). Our API correlates pronunciation performance
                  with IELTS criteria, allowing users to gauge their language
                  proficiency and work towards achieving their desired scores.
                </Content>
              </div>
              <div className="flex flex-col gap-6 text-center justify-center items-center">
                <Content className={contentVariants({ variant: "content" })}>
                  Lark.API delivers real-time assessment, making it ideal for
                  language learning platforms, educational institutions, and
                  language tutors. Users can receive instant feedback on their
                  pronunciation, enabling them to make immediate adjustments and
                  monitor their progress over time.
                </Content>
                <Content className={contentVariants({ variant: "content" })}>
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
  );
}
