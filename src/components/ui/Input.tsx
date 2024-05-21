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
			<div className="flex items-center ring-slate-800  hover:bg-gray-50 border border-gray-150 rounded-md relative">
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
					className="text-sm font-lato bg-transparent w-full p-3 outline-none placeholder:font-normal"
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
