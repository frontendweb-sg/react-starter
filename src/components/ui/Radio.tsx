import {useId} from "react";

import classNames from "classnames";

export type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
};
export default function Radio({
	label,
	name,
	value,
	className,
	...rest
}: RadioProps) {
	const inputId = useId();
	return (
		<div
			className={classNames("flex items-center text-sm mb-2 gap-2", className)}>
			<input id={inputId} name={name} value={value} type="radio" {...rest} />
			<label htmlFor={inputId}>{label}</label>
		</div>
	);
}
