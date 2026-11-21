

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) {
  const style =
    variant === "primary"
      ? "bg-[#1C1917] text-[#FAF8F5] hover:bg-[#9A5B3A]"
      : "border border-[#1C1917]/30 text-[#1C1917] hover:bg-[#1C1917]/5";

  return (
    <button
      onClick={onClick}
      className={`rounded-full px-6 py-2.5 text-sm font-medium transition cursor-pointer ${style} ${className}`}
    >
      {children}
    </button>
  );
}