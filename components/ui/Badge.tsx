interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "glass" | "success";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default: "border-white/[0.08] bg-white/[0.03] text-muted",
    accent: "border-indigo-500/20 bg-indigo-500/10 text-indigo-400",
    glass: "border-white/[0.1] bg-white/[0.05] text-foreground backdrop-blur-sm",
    success: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  };

  return (
    <span
      className={`
        inline-flex items-center rounded-lg border px-3 py-1.5 text-xs font-medium transition-all duration-300
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
