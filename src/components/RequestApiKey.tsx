"use client"

import { createApiKey } from "@/helpers/create-api-key"
import { Key } from "lucide-react"
import Link from "next/link"
import { FC, useState } from "react"
import CopyButton from "./CopyButton"
import Icons from "./Icons"
import { Button, buttonVariants } from "./ui/Button"
import { Input } from "./ui/Input"
import LargeHeading from "./ui/LargeHeading"
import Paragraph from "./ui/Paragraph"
import { toast } from "./ui/toast"

interface RequestApiKeyProps {}

const RequestApiKey: FC<RequestApiKeyProps> = ({}) => {
  const [isCreating, setIsCreating] = useState<boolean>(false)
  const [apiKey, setApiKey] = useState<string | null>(null)

  async function createNewApiKey(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsCreating(true)

    try {
      const generatedApiKey = await createApiKey()
      setApiKey(generatedApiKey)
    } catch (err) {
      if (err instanceof Error) {
        toast({
          title: "Error",
          message: err.message,
          type: "error",
        })

        return
      }

      toast({
        title: "Error",
        message: "Something went wrong",
        type: "error",
      })
    } finally {
      setIsCreating(false)
    }
  }

  return (
    <div className="container md:max-w-2xl">
      <div className="flex flex-col gap-4 items-center">
        <Key className="mx-auto h-10 md:h-8 lg:h-12 w-10 md:w-8 lg:w-12 text-perfume-400 dark:text-minsk-400" />
        <LargeHeading
          size="sm"
          className="pb-8 px-1 selection:bg-transparent text-transparent dark:bg-gradient-to-r dark:bg-clip-text"
        >
          Request your API key
        </LargeHeading>
        <Paragraph size="sm" className="pb-0">
          You haven&apos;t requested an API key yet.
        </Paragraph>
      </div>
      <form
        onSubmit={createNewApiKey}
        className="mt-6 sm:flex sm:items-center"
        action="#"
      >
        <label htmlFor="emails" className="sr-only">
          Your API key
        </label>
        <div className="flex gap-4 rounded-md sm:min-w-0 sm:flex-1">
          {/* Show a copy icon if API key was generated successfully */}
          <Input
            readOnly
            value={apiKey ?? ""}
            placeholder="Request an API key to display it here"
            className={`${
              !!apiKey
                ? "shadow-lg shadow-perfume-200/75 dark:shadow-lg dark:shadow-minsk-700/75"
                : ""
            }`}
          />
          {!!apiKey ? (
            <CopyButton
              className="animate-in fade-in duration-300"
              valueToCopy={apiKey}
            />
          ) : null}
        </div>

        <div
          className={
            `${!!apiKey ? "hidden " : ""}` +
            "mt-6 flex justify-center sm:mt-0 sm:ml-4 sm:flex-shrink-0 "
          }
        >
          <Button isLoading={isCreating}>Request key</Button>
        </div>
      </form>
      <div className="items-center justify-center text-center mt-10">
        {apiKey ? (
          <Link
            className={buttonVariants({ variant: "subtle" })}
            href="/dashboard#"
          >
            <Icons.RefreshCw className="h-4 w-4 mr-2 " />
            Click to refresh
          </Link>
        ) : null}
      </div>
    </div>
  )
}

export default RequestApiKey
