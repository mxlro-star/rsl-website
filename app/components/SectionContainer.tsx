import React from "react";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "default" | "narrow" | "wide";
  noPadding?: boolean;
}

export default function SectionContainer({
  children,
  className = "",
  maxWidth = "default",
  noPadding = false,
}: SectionContainerProps) {
  const maxWidthClass = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1440px]",
  }[maxWidth];

  const paddingClass = noPadding ? "" : "py-32 lg:py-24 md:py-16 px-6";

  return (
    <div className={`mx-auto ${maxWidthClass} ${paddingClass} ${className}`}>
      {children}
    </div>
  );
}
