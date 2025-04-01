import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;

  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";

  href?: string;
  type?: "button" | "submit" | "reset";

  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  onClick,
}) => {
  const baseStyles =
    "inline-block text-sm rounded-md transition-opacity hover:opacity-75  focus:outline-none cursor-pointer";

  const sizeStyles = {
    sm: "px-3 py-1.5",
    md: "px-4 py-3",
    lg: "px-6 py-3",
  };

  const variantStyles = {
    primary: "bg-brand text-zinc-900 focus:ring-blue-500 disabled:bg-blue-300",
    secondary:
      "bg-zinc-950 border border-white/20 text-white focus:ring-gray-500 disabled:bg-gray-300",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500 disabled:opacity-50",
    ghost:
      "text-blue-600 hover:bg-blue-50 focus:ring-blue-500 disabled:opacity-50",
    link: "text-blue-600 hover:underline focus:ring-0 disabled:opacity-50 p-0",
  };

  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]}`;

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonStyles}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
