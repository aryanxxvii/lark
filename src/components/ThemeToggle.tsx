"use client";

import { FC } from "react";
import { useTheme } from "next-themes";
import { DropdownMenu, DropdownMenuTrigger } from "@/ui/DropdownMenu";
import { Button } from "./ui/Button";
import { Icons } from "@/components/Icons";
import hotToast, { Toaster as HotToaster } from "react-hot-toast";

const ThemeToggle: FC = ({}) => {
  const { theme, setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        onClick={() => {
          theme == "dark" ? setTheme("light") : setTheme("dark");
        }}
      >
        <Button variant="ghost" size="sm">
          <Icons.Sun className="rotate-0 scale-100 transition-all  dark:-rotate-90 dark:scale-0 dark:text-minsk-400 " />
          <Icons.Moon className="absolute rotate-90 scale-0 transition-all hover:text-minsk-900 dark:rotate-0 dark:scale-100 dark:text-minsk-400 " />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default ThemeToggle;
