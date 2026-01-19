interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className = "",
}: BadgeProps) {
  return (
    <span className={`text-sm text-muted ${className}`}>
      {children}
    </span>
  );
}
