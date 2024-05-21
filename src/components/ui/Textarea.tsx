import {ReactElement, useMemo} from "react";

import FormGroup from "./FormGroup";
import type {FormGroupProps} from "./FormGroup";

import classNames from "classnames";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
	label?: string;
	formGroupProps?: FormGroupProps;
	startIcon?: ReactElement;
};
export default function Textarea({
	name,
	startIcon,
	value,
	label,
	...rest
}: TextareaProps) {
	const totalWords = useMemo(() => String(value).split(" ").length, [value]);

	return (
		<FormGroup label={label}>
			<div className="flex ring-slate-800  hover:bg-gray-50 border border-gray-150 rounded-md relative">
				{startIcon && <span className="pl-3 pt-3">{startIcon}</span>}
				<textarea
					className={classNames(
						"text-sm font-lato bg-transparent w-full p-3 outline-none placeholder:font-normal",
					)}
					name={name}
					value={value}
					placeholder={label}
					{...rest}
				/>
			</div>
			{value && (
				<span className="text-[10px] bg-gray-50 text-black font-medium px-2 py-1 flex absolute bottom-1 right-3">
					Words: {totalWords}, Char: {String(value).length}
				</span>
			)}
		</FormGroup>
	);
}
