import type { InputProps } from "./Input.types";

function Input({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  errorMessage = "",
  className = "",
  onEnter,
}: InputProps) {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block text-lg font-bold text-black"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && onEnter) {
            onEnter();
          }
        }}
        className={`mb-2 w-full rounded-lg border bg-transparent px-4 py-3 text-sm text-black outline-none placeholder:text-gray-700 ${
          errorMessage ? "border-red-400" : "border-black"
        } ${className}`}
      />

      {errorMessage && (
        <p className="text-xs text-red-400">{errorMessage}</p>
      )}
    </div>
  );
}

export default Input;