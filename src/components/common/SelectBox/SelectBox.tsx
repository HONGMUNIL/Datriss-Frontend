import type { SelectBoxProps } from "./SelectBox.types";

function SelectBox({
    value,
    onChange,
    className="",
    options,
}: SelectBoxProps ) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-600 outline-none cursor-pointer focus:border-indigo-500 ${className}`}
            >
            {options.map((option) => (
                <option
                key={option.value}
                value={option.value}
                className="cursor-pointer"
                >
                    {option.label}
                </option>
            ))}

            </select>
    );
}











export default SelectBox;

