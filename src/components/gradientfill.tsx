// 20250701 UPDATE FOR PUBLIC REPO -LEGACY CODE | -FUNCTIONAL
"use client";

import { clsx } from "clsx";
import React from "react";

interface GradientFillProps extends React.ComponentPropsWithoutRef<"div"> {
  variant?: "productGrid" | "productListItem";
}

// gradients.ts (or wherever you store your constants)
export const gradientVariants = {
  productGrid: "bg-gradient-to-br from-[#E6E6FA] via-[#ADD8E6] to-[#00008B]", // Lavender → Light Blue → Dark Blue
  productListItem: "bg-gradient-to-r from-[#E6E6FA] via-[#ADD8E6] to-[#00008B]", // Lavender → Light Blue → Dark Blue
};


export function GradientFill({
  className,
  variant = "productGrid",
  ...props
}: GradientFillProps) {
  return (
    <div
      {...props}
      className={clsx(
        "rounded-lg blur-xl opacity-70 absolute inset-0 -z-10",
        gradientVariants[variant],
        className
      )}
    />
  );
}

export default GradientFill;
