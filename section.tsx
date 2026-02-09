import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SectionSize = "xs" | "sm" | "md" | "lg";

interface SectionProps {
  children: ReactNode;
  size?: SectionSize;
  className?: string;
}

const sizeClasses: Record<SectionSize, string> = {
  xs: "py-4 sm:py-6",
  sm: "py-6 sm:py-8",
  md: "py-10 sm:py-14 lg:py-16",
  lg: "py-14 sm:py-20 lg:py-24",
};

/**
 * Vertical spacing + semantic wrapper
 */
export function Section({ children, size = "md", className }: SectionProps) {
  return <section className={cn("scroll-mt-24", sizeClasses[size], className)}>{children}</section>;
}
