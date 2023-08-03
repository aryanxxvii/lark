import { FC } from "react"

import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"

const headingVariants = cva(
  "items-center text-transparent selection:bg-transparent selection:dark:bg-transparent from-purple-400 from-0% via-perfume-400 via-50% to-pink-400 to-100% bg-gradient-to-l bg-clip-text dark:from-indigo-500 dark:via-minsk-300 dark:to-minsk-400 dark:bg-gradient-to-r dark:bg-clip-text cursor-default text-center lg:text-center font-extrabold leading-tight tracking-tighter",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        lg: "text-5xl md:text-6xl lg:text-7xl",
        sm: "text-2xl md:text-3xl lg:text-4xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

interface LargeHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const LargeHeading: FC<LargeHeadingProps> = ({
  children,
  className,
  size,
  ...props
}) => {
  return (
    <h1 {...props} className={cn(headingVariants({ size, className }))}>
      {children}
    </h1>
  )
}

export default LargeHeading
