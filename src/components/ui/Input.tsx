import FormGroup from "./FormGroup";
import type { ReactElement } from "react";
import { type FormGroupProps } from "./FormGroup";

/**
 * Form input
 */
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  formGroupProps?: FormGroupProps;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
};
export default function Input({
  name,
  value,
  type = "text",
  label,
  placeholder,
  startIcon,
  endIcon,
  formGroupProps,
  ...rest
}: InputProps) {
  return (
    <FormGroup {...formGroupProps} label={label}>
      <div>
        {startIcon}
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder ?? label}
          {...rest}
        />
        {endIcon}
      </div>
    </FormGroup>
  );
}
