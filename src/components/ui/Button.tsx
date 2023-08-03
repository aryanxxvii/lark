import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import * as React from "react";

const buttonVariants = cva(
  " inline-flex items-center justify-center text-sm font-medium transition-colors  disabled:opacity-50  disabled:pointer-events-none ",
  {
    variants: {
      variant: {
        badge:
          "rounded-full text-perfume-600/75 bg-perfume-200/75  border-perfume-300/50 dark:bg-minsk-300/25 h-8 dark:text-white border dark:border-gray-600/60",
        hero: "rounded-full transition-shadow duration-10000 hover:drop-shadow shadow-purple-300  hover:shadow-lg from-purple-400 via-perfume-400 to-pink-400 dark:hover:shadow-purple-800/75 bg-gradient-to-r dark:from-purple-700 dark:to-blue-400 text-white ",
        default:
          "rounded-md bg-perfume-600 text-perfume-50 hover:bg-perfume-700 dark:bg-minsk-200 dark:text-minsk-900 dark:hover:bg-minsk-100",
        destructive:
          "rounded-md text-perfume-700 hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "rounded-md bg-perfume-700 text-perfume-700 hover:bg-perfume-800 dark:bg-minsk-200 dark:text-minsk-900 dark:hover:bg-minsk-100 border border-minsk-200 dark:border-minsk-700",
        subtle:
          "rounded-md px-6 py-6 bg-perfume-100 text-perfume-700 hover:bg-perfume-200/60 dark:bg-minsk-700 dark:text-minsk-100 hover:dark:bg-minsk-800 hover:dark:text-minsk-100",
        ghost:
          "rounded-md bg-transparent hover:bg-perfume-100 dark:hover:bg-minsk-800 text-perfume-700 dark:text-minsk-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "rounded-md bg-transparent dark:bg-transparent underline-offset-4 hover:underline hover:bg-transparent dark:hover:bg-transparent",
        border:
          "rounded-md bg-transparent dark:bg-transparent border border-2 border-perfume-700 text-perfume-700 dark:text-minsk-400 dark:border-minsk-400 hover:bg-perfume-700 hover:dark:bg-minsk-400 hover:dark:text-minsk-900 hover:text-perfume-50 ",
        bordergrad:
          "rounded-md transition-shadow bg-perfume-500 hover:shadow-lg hover:shadow-perfume-500/40 hover:dark:shadow-minsk-400/40 dark:bg-minsk-400 outline -outline-offset-2 outline-0 outline-perfume-700 text-perfume-50 dark:text-minsk-900 dark:outline-minsk-400 hover:from-perfume-400 hover:to-purple-400 hover:bg-gradient-to-br hover:text-slate-100 hover:outline-none hover:dark:shadow-lg hover:dark:from-indigo-500 hover:dark:to-minsk-300 hover:dark:bg-gradient-to-br hover:dark:outline-none hover:dark:text-slate-900",
      },
      size: {
        content: "h-48 w-96 py-2 px-4",
        default: "h-10 py-2 px-4",
        sm: "h-10 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
      fontsize: {
        semibold: "font-semibold",
        bold: "font-bold",
        xl: "font-9xl",
      },
      logo: {
        logo: "text-transparent from-purple-400 from-0% via-perfume-400 via-50% to-pink-400 to-100% bg-gradient-to-l bg-clip-text  dark:from-indigo-300 dark:via-minsk-300 dark:to-minsk-400 dark:bg-gradient-to-r dark:bg-clip-text",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
