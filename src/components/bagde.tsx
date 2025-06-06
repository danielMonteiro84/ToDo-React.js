import { cva, type VariantProps } from "class-variance-authority";
import Text from "./text";
import React from "react";

export const BagdeVariants = cva(
  "inline-flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        primary: "bg-green-light",
        secundary: "bg-pink-light",
      },
      size: {
        sm: "py-0.5 px-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

export const bagdeTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-green-dark",
      secundary: "text-pink-dark",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface BagdeProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof BagdeVariants> {}

export default function Bagde({
  variant,
  size,
  className,
  children,
  ...props
}: BagdeProps) {
  return (
    <div className={BagdeVariants({ variant, size, className })} {...props}>
      <Text variant="body-sm-bold" className={bagdeTextVariants({ variant })}>
        {children}
      </Text>
    </div>
  );
}
