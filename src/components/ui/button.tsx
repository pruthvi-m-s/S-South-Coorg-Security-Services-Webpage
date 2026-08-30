import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "group/button",
    "inline-flex",
    "shrink-0",
    "items-center",
    "justify-center",
    "rounded-md",
    "border",
    "border-transparent",
    "bg-clip-padding",
    "text-sm",
    "font-medium",
    "whitespace-nowrap",
    "transition-all",
    "duration-200",
    "outline-none",
    "select-none",
    "focus-visible:border-ring",
    "focus-visible:ring-3",
    "focus-visible:ring-ring/25",
    "focus-visible:shadow-[0_0_0_4px_rgba(179,33,26,0.10)]",
    "active:translate-y-px",
    "disabled:pointer-events-none",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "aria-invalid:border-destructive",
    "aria-invalid:ring-3",
    "aria-invalid:ring-destructive/20",
    "dark:aria-invalid:border-destructive",
    "dark:aria-invalid:ring-destructive/30",
    "[&_svg]:pointer-events-none",
    "[&_svg]:shrink-0",
    "[&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        /*
         * Primary CTA
         * Reserved for the most important action on a section.
         */
        default:
          "bg-primary text-primary-foreground shadow-[0_7px_18px_rgba(179,33,26,0.16)] hover:-translate-y-0.5 hover:bg-primary-800 hover:shadow-[0_10px_24px_rgba(179,33,26,0.20)]",

        /*
         * Transparent button for dark imagery/sections.
         */
        outline:
          "border-current/20 bg-transparent text-foreground shadow-none hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5 hover:text-primary hover:shadow-sm dark:border-white/20 dark:hover:border-primary dark:hover:bg-primary/10 dark:hover:text-white",

        /*
         * Neutral secondary action.
         */
        secondary:
          "border-transparent bg-secondary text-secondary-foreground shadow-none hover:-translate-y-0.5 hover:bg-[#e7e1d7] hover:shadow-sm dark:bg-secondary dark:text-secondary-foreground dark:hover:bg-[#2d2b28]",

        /*
         * Low-emphasis utility action.
         */
        ghost:
          "border-transparent bg-transparent text-foreground shadow-none hover:bg-muted hover:text-foreground hover:shadow-sm aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/60",

        /*
         * Destructive actions are visually separate from
         * the SSCSS commercial red CTA treatment.
         */
        destructive:
          "border-destructive/15 bg-destructive/5 text-destructive hover:border-destructive/25 hover:bg-destructive/10 hover:text-destructive focus-visible:border-destructive/40 focus-visible:ring-destructive/15 dark:border-destructive/20 dark:bg-destructive/10 dark:hover:bg-destructive/15",

        /*
         * Inline text action.
         */
        link:
          "border-transparent bg-transparent text-primary underline-offset-4 shadow-none hover:text-primary-800 hover:underline",
      },

      size: {
        default:
          "min-h-11 gap-2 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",

        xs:
          "h-8 gap-1 rounded-[min(var(--radius-md),8px)] px-2.5 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",

        sm:
          "min-h-10 gap-1.5 rounded-[min(var(--radius-md),10px)] px-3 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 [&_svg:not([class*='size-'])]:size-3.5",

        lg:
          "min-h-12 gap-2 px-5 text-[0.95rem] has-data-[icon=inline-end]:pr-3.5 has-data-[icon=inline-start]:pl-3.5",

        icon: "size-11",

        "icon-xs":
          "size-7 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",

        "icon-sm":
          "size-10 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg",

        "icon-lg": "size-12",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        buttonVariants({
          variant,
          size,
          className,
        }),
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };