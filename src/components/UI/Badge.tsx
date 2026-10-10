
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-zinc-900/10 bg-orange-50 px-3 py-1 text-xs font-medium text-zinc-800 transition-colors duration-200 hover:border-orange-700/30 hover:text-orange-800 ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
