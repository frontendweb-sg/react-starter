import {useId} from "react";

import classNames from "classnames";

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
};
export default function Checkbox({
	label,
	name,
	value,
	className,
	defaultValue,
	...rest
}: CheckboxProps) {
	const inputId = useId();

	return (
		<div
			className={classNames("flex items-center text-sm mb-2 gap-2", className)}>
			<input
				id={inputId}
				checked={defaultValue === value}
				name={name}
				value={value}
				type="checkbox"
				{...rest}
			/>
			<label htmlFor={inputId}>{label}</label>
		</div>
	);
}
