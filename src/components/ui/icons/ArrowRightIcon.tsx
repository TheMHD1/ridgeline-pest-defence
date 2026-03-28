import React from "react";

export interface ArrowRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function ArrowRightIcon({ size = 16, className, ...props }: ArrowRightIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}