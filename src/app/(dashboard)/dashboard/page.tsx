// import ApiDashboard from '@/components/ApiDashboard'
import RequestApiKey from "@/components/RequestApiKey";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { FC } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CreateApiData } from "@/types/api/key";
import ApiDashboard from "@/components/ApiDashboard";
export const metadata: Metadata = {
  title: "Lark API | Dashboard",
  description: "Open-source pronunciation assessment API",
};

const page = async () => {
  const user = await getServerSession(authOptions);
  if (!user) return notFound();
  const apiKey = await db.apiKey.findFirst({
    where: { userId: user.user.id, enabled: true },
  });

  return (
    <div className="max-w-7xl mx-auto mt-16">
      {apiKey ? (
        // @ts-expect-error Server Component
        <ApiDashboard />
      ) : (
        <RequestApiKey />
      )}
    </div>
  );
};

export default page;
