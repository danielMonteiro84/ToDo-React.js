import { cva, cx, type VariantProps } from "class-variance-authority";
import Text from "./text";
import React from "react";
import Skeleton from "./skeleton";

export const BagdeVariants = cva(
  "inline-flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        none: "",
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
      none: "",
      primary: "text-green-dark",
      secundary: "text-pink-dark",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const badgeSkeletonVariants = cva("", {
  variants: {
    size: {
      sm: "w-6 h-6",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

interface BagdeProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof BagdeVariants> {
  loading?: boolean;
}

export default function Bagde({
  variant,
  size,
  className,
  children,
  loading,
  ...props
}: BagdeProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="full"
        className={cx(
          BagdeVariants({ variant: "none" }),
          badgeSkeletonVariants({ size }),
          className
        )}
      />
    );
  }
  return (
    <div className={BagdeVariants({ variant, size, className })} {...props}>
      <Text variant="body-sm-bold" className={bagdeTextVariants({ variant })}>
        {children}
      </Text>
    </div>
  );
}
