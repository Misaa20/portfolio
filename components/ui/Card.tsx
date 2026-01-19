interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  variant?: "default" | "glass" | "elevated";
}

export default function Card({
  children,
  className = "",
  hover = true,
  glow = false,
  variant = "default",
}: CardProps) {
  const variants = {
    default: "border-white/[0.08] bg-white/[0.02]",
    glass: "border-white/[0.08] bg-white/[0.03] backdrop-blur-xl",
    elevated: "border-white/[0.1] bg-slate-900/80 backdrop-blur-xl",
  };

  const hoverStyles = hover
    ? "transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5"
    : "";

  const glowStyles = glow
    ? "shadow-lg shadow-indigo-500/10"
    : "";

  return (
    <div
      className={`
        relative rounded-2xl border p-6
        ${variants[variant]}
        ${hoverStyles}
        ${glowStyles}
        ${className}
      `}
    >
      {/* Optional gradient border on hover */}
      {hover && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 hover:opacity-100">
          <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-indigo-500/20 via-transparent to-cyan-500/20" />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
