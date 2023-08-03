import { FC } from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const contentVariants = cva(
  "cursor-default	  items-center justify-center rounded-md text-sm font-medium transition-colors disabled:opacity-50  disabled:pointer-events-none ",
  {
    variants: {
      variant: {
        content:
          "transition duration-200 w-max-screen h-56 w-90 px-6 py-6  bg-perfume-100 text-perfume-700  hover:bg-perfume-200/60 hover:scale-[102%] hover:dark:bg-minsk-700/75 border-perfume-200 dark:bg-minsk-700/50 border dark:border-minsk-500 dark:text-minsk-100  hover:dark:text-minsk-100",
      },
    },
    defaultVariants: {},
  }
);

interface ContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof contentVariants> {}

const Content: FC<ContentProps> = ({ children, className, ...props }) => {
  return (
    <h1 {...props} className={cn(contentVariants({ className }))}>
      {children}
    </h1>
  );
};

export { Content, contentVariants };
