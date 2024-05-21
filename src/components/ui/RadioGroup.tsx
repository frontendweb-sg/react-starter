import Radio, {type RadioProps} from "./Radio";

import classNames from "classnames";

type RadioGroupProps<T> = React.HtmlHTMLAttributes<HTMLDivElement> & {
	radioProps?: RadioProps;
	options: T[];
	vertical?: boolean;
};
export default function RadioGroup<T>({
	options,
	radioProps,
	onChange,
	defaultValue,
	vertical,
	...rest
}: RadioGroupProps<T>) {
	return (
		<div className={classNames(!vertical && "flex space-x-5")} {...rest}>
			{options.map((option: T, index: number) => (
				<Radio
					checked={defaultValue === option["value" as keyof T]}
					key={index}
					{...option}
					{...radioProps}
					onChange={onChange}
				/>
			))}
		</div>
	);
}
