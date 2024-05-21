import type {CheckboxProps} from "./Checkbox";
import Checkbox from "./Checkbox";

import classNames from "classnames";

type CheckboxGroupProps<T> = React.HtmlHTMLAttributes<HTMLDivElement> & {
	radioProps?: CheckboxProps;
	options: T[];
	vertical?: boolean;
	defaultValues?: string[];
};
export default function CheckboxGroup<T>({
	options,
	radioProps,
	onChange,
	defaultValues,
	vertical,
	...rest
}: CheckboxGroupProps<T>) {
	return (
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
	);
}
