import Link from "next/link";
import { FC } from "react";
import { buttonVariants } from "./ui/Button";
import { getServerSession } from "next-auth";
import SignInButton from "@/components/ui/SignInButton";
import SignOutButton from "@/ui/SignOutButton";
import ThemeToggle from "./ThemeToggle";
import { roboto_mono } from "@/app/layout";
import { authOptions } from "@/lib/auth";
const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="fixed backdrop-blur-sm bg-perfume-50/60 dark:bg-minsk-900/60 z-50 top-0 left-0 right-0 h-20 border-b border-perfume-100 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        {" "}
        <Link
          href="/"
          className={`${buttonVariants({
            variant: "link",
            logo: "logo",
          })}, ${roboto_mono.className} font-medium text-base `}
        >
          Lark API
        </Link>
        <div className="md:hidden text-center">
          <ThemeToggle />
        </div>
        <div className="hidden md:flex gap-2">
          <ThemeToggle />
          <Link
            href="/documentation"
            className={buttonVariants({ variant: "ghost" })}
          >
            Documentation
          </Link>

          {session ? (
            <>
              <Link
                className={buttonVariants({ variant: "ghost" })}
                href="/dashboard"
              >
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
