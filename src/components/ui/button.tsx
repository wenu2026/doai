import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-10 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background hover:bg-foreground/88 focus-visible:outline-foreground",
        primary: "doai-primary-action bg-primary text-white shadow-sm shadow-primary/20 hover:bg-primary/90 focus-visible:outline-primary",
        secondary: "border border-border bg-white/82 text-foreground shadow-sm shadow-border/40 hover:border-primary/45 hover:bg-muted focus-visible:outline-border",
        ghost: "text-foreground hover:bg-white/70 focus-visible:outline-border",
      },
      size: {
        default: "min-h-10 px-4",
        sm: "min-h-9 px-3",
        lg: "min-h-12 px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

type ButtonLinkProps = React.ComponentProps<typeof Link> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

export function ButtonLink({ className, variant, size, ...props }: ButtonLinkProps) {
  return <Link className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
