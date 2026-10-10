import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-colors duration-300 hover:border-white/20 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;