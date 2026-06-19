export type InputProps = {
  id: string;
  label?: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  errorMessage?: string;
  className?: string;
  onEnter?: () => void;
};