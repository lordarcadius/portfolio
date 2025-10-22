import React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background shadow hover:bg-foreground/80",
        outline:
          "border border-foreground/20 bg-transparent shadow-sm hover:bg-foreground/5",
        ghost: "hover:bg-foreground/5",
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  asLink?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ className, variant, size, asLink = false, href, ...props }, ref) => {
  if (asLink) {
    return (
      <Link
        href={href || ""}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...props}
      />
    );
  }
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref as React.Ref<HTMLButtonElement>}
      disabled={props.disabled}
      type={props.type}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
