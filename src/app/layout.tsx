import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Inter, Roboto_Mono } from "next/font/google";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";

export const inter = Inter({ subsets: ["latin"], weight: "variable" });

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("text-slate-900 antialiased", inter.className)}
    >
      <body className="selection:bg-blue-200 dark:selection:bg-minsk-300/50 min-h-screen bg-perfume-50 bg-center bg-cover bg-no-repeat dark:bg-minsk-900 antialiased">
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />

          <main>
            {children}
            <Toaster position="bottom-right" />
          </main>
        </Providers>
        <div className="mb-24 sm:mb-0 "></div>
      </body>
    </html>
  );
}
