import {useId, type ReactElement} from "react";

import FormGroup from "./FormGroup";
import type {FormGroupProps} from "./FormGroup";

/**
 * Form input
 */
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
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
	const inputId = useId();
	return (
		<FormGroup label={label} labelFor={inputId} {...formGroupProps}>
			<div className="flex items-center font-small   hover:bg-gray-50 ring-1 ring-gray-200 rounded-md relative hover:ring-indigo-300">
				{startIcon && (
					<span className="pl-3" aria-hidden="true">
						{startIcon}
					</span>
				)}
				<input
					id={inputId}
					type={type}
					name={name}
					value={value}
					placeholder={placeholder ?? label}
					aria-describedby={inputId}
					aria-labelledby={inputId}
					className="bg-transparent w-full p-3 outline-none placeholder:font-normal"
					{...rest}
				/>
				{endIcon && (
					<span className="pr-3" aria-hidden="true">
						{endIcon}
					</span>
				)}
			</div>
		</FormGroup>
	);
}
