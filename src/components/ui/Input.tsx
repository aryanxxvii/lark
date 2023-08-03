import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 w-full rounded-md border placeholder:text-opacity-75 border-perfume-700 bg-transparent py-2 px-3 text-sm text-perfume-700 dark:text-minsk-200 placeholder:text-perfume-700 dark:placeholder:text-minsk-400 focus:outline-none focus:ring-2 focus:ring-perfume-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-minsk-700 dark:focus:ring-minsk-400 dark:focus:ring-offset-minsk-900",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
