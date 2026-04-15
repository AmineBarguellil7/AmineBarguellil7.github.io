"use client";

import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type MagneticLinkProps = ComponentPropsWithoutRef<"a">;

export function MagneticLink({
  className,
  children,
  ...props
}: MagneticLinkProps) {
  return (
    <a className={cn("motion-transform", className)} data-magnetic {...props}>
      {children}
    </a>
  );
}
