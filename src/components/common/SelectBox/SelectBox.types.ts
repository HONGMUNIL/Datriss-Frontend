export type SelectOption = {
    label: string;
    value: string;
};



export type SelectBoxProps = {
    value: string;
    onChange: (value: string) => void;
    options: SelectOption[];
    className?: string;
};








