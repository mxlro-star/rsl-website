import Link from "next/link";
import { ButtonProps } from "@/lib/types";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-block px-8 py-4 text-base font-medium transition-all duration-300 border relative overflow-hidden group";

  const variantStyles = {
    primary:
      "bg-blue-500 text-white border-blue-500 hover:bg-blue-600 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/20",
    secondary:
      "bg-transparent text-zinc-50 border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles} type="button">
      {children}
    </button>
  );
}
