import type { ButtonProps } from "./Button.types";

function Button({
  children,
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  return (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`inline-flex items-center justify-center rounded-lg text-sm font-semibold transition ${
         disabled ? "cursor-default opacity-50" : "cursor-pointer"
      } ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;