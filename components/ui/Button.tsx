import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "group relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl overflow-hidden";

  const variants = {
    primary:
      "bg-foreground text-background hover:bg-foreground/90 active:scale-[0.98]",
    secondary:
      "border border-white/[0.1] bg-white/[0.03] text-foreground backdrop-blur-sm hover:border-white/[0.2] hover:bg-white/[0.06] active:scale-[0.98]",
    ghost:
      "text-muted hover:text-foreground hover:bg-white/[0.05] active:scale-[0.98]",
    gradient:
      "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:shadow-lg hover:shadow-indigo-500/25 active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // Shimmer effect for gradient variant
  const shimmerEffect = variant === "gradient" && (
    <span className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
        >
          {shimmerEffect}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles}>
        {shimmerEffect}
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {shimmerEffect}
      {children}
    </button>
  );
}
