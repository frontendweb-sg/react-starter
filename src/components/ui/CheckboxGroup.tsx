import type {CheckboxProps} from "./Checkbox";
import Checkbox from "./Checkbox";

import classNames from "classnames";

type CheckboxGroupProps<T> = React.HtmlHTMLAttributes<HTMLDivElement> & {
	radioProps?: CheckboxProps;
	options: T[];
	vertical?: boolean;
	defaultValues?: string[];
	label?: string;
};
export default function CheckboxGroup<T>({
	options,
	radioProps,
	onChange,
	defaultValues,
	vertical,
	label,
	...rest
}: CheckboxGroupProps<T>) {
	return (
		<>
			<label className="flex text-slate-500 text-xs font-medium mb-2  w-full">
				{label}
			</label>
			<div className={classNames(!vertical && "flex space-x-5")} {...rest}>
				{options.map((option: T, index: number) => (
					<Checkbox
						checked={defaultValues?.includes(
							option["value" as keyof T] as string,
						)}
						key={index}
						{...option}
						{...radioProps}
						onChange={onChange}
					/>
				))}
			</div>
		</>
	);
}
