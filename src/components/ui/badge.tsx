import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium", {
  variants: {
    variant: {
      default: "bg-muted text-foreground",
      primary: "bg-primary/14 text-primary",
      warm: "bg-accent/28 text-accent-foreground",
      outline: "border border-border bg-white/75 text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
