import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { FC } from "react";
import { formatDistance } from "date-fns";
import ApiKeyOptions from "./ApiKeyOptions";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "./ui/Paragraph";
import { Input } from "./ui/Input";
import Table from "./Table";

const ApiDashboard = async () => {
  const user = await getServerSession(authOptions);
  if (!user) notFound();
  const apiKeys = await db.apiKey.findMany({
    where: { userId: user.user.id },
  });

  const activeApiKey = apiKeys.find((apiKey) => apiKey.enabled);
  if (!activeApiKey) notFound();

  const userRequests = await db.apiRequest.findMany({
    where: {
      apiKeyId: {
        in: apiKeys.map((key) => key.id),
      },
    },
  });

  const serializableRequests = userRequests.map((req) => ({
    ...req,
    timestamp: formatDistance(new Date(req.timestamp), new Date()),
  }));
  return (
    <div className="container flex flex-col gap-3 ">
      <div className="container flex flex-col items-center mb-8">
        <LargeHeading size="sm">Welcome, {user.user.name}</LargeHeading>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-start items-center">
        <Paragraph size="sm">Your API Key:</Paragraph>
        <Input className="w-fit truncate" readOnly value={activeApiKey.key} />
        <ApiKeyOptions apiKeyId={activeApiKey.id} apiKey={activeApiKey.key} />
      </div>
      <div>
        <Paragraph size="sm" className="text-center md:text-left mt-4 mb-4 ">
          Your API History:
        </Paragraph>
        <Table userRequests={serializableRequests}></Table>
      </div>
    </div>
  );
};

export default ApiDashboard;
