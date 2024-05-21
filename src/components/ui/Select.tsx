import {ReactElement, ReactNode, useRef} from "react";
import {FaCaretDown, FaCaretUp, FaCheck} from "react-icons/fa6";

import useClickOutside from "../../hooks/useClickOutside";
import useSelect from "../../hooks/useSelect";
import FormGroup from "./FormGroup";

import classNames from "classnames";
import upperFirst from "lodash/upperFirst";

type SelectProps<T> = {
	name: string;
	value: string;
	label?: string;
	options: T[];
	getOptionLabel?: (option: T) => string;
	getOptionValue?: (option: T) => string | number | object;
	renderOption?: (option: T) => ReactNode;
	startIcon?: ReactElement;
	onChange?: (name: string, option: string | T) => void;
};

export default function Select<T>({
	name,
	value,
	label,
	options,
	onChange,
	startIcon,
	renderOption,
	getOptionLabel,
	getOptionValue,
	...rest
}: SelectProps<T>) {
	const elemRef = useRef<HTMLDivElement>(null);

	const {
		open,
		selected,
		handleClose,
		setSelected,
		handleToggle,
		currentIndex,
		handleKeyChange,
		getLabel,
		getValue,
	} = useSelect({
		options,
		value,
		getOptionValue,
		getOptionLabel,
	});

	const handleChange = (option: T | string) => {
		setSelected(option);
		onChange?.(name, option);
	};

	useClickOutside(elemRef, handleClose);

	return (
		<FormGroup
			label={label}
			onKeyDown={handleKeyChange}
			ref={elemRef}
			{...rest}>
			<SelectLabel
				open={open}
				label={upperFirst(selected as string)}
				icon={startIcon}
				onClick={handleToggle}
			/>

			{open && (
				<SelectDropdown>
					{options.map((option: T, index) => (
						<SelectItem
							selected={index === currentIndex}
							key={index}
							onClick={() =>
								handleChange(
									(getOptionValue
										? getValue(option)
										: getLabel(option)) as string,
								)
							}>
							{selected ===
								(getOptionValue
									? getValue(option)
									: (getLabel(option) as string)) && (
								<FaCheck className="mr-2" />
							)}
							{renderOption
								? renderOption(option)
								: (getLabel(option) as string)}
						</SelectItem>
					))}
				</SelectDropdown>
			)}
		</FormGroup>
	);
}

type SelectDropdownProps = React.HtmlHTMLAttributes<HTMLDivElement>;
function SelectDropdown({children}: SelectDropdownProps) {
	return (
		<div className="z-10 p-2 bg-white absolute rounded-lg shadow w-full dark:bg-gray-700">
			<ul>{children}</ul>
		</div>
	);
}

type SelectItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
	selected?: boolean;
};
function SelectItem({children, className, selected, ...rest}: SelectItemProps) {
	return (
		<li
			className={classNames(
				"inline-flex w-full px-4 py-2 text-sm items-center text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white",
				selected && "bg-gray-100",
				className,
			)}
			{...rest}>
			{children}
		</li>
	);
}

type SelectLabelProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
	open: boolean;
	icon?: ReactElement;
	label: string;
};

function SelectLabel({
	open,
	icon,
	className,
	label,
	...rest
}: SelectLabelProps) {
	return (
		<div
			role="combobox"
			className={classNames(
				"flex items-center ring-slate-800 cursor-pointer hover:bg-gray-50 border border-gray-150 rounded-md pr-3",
				className,
			)}
			{...rest}>
			{icon && <span className="pl-3">{icon}</span>}
			<input
				readOnly
				value={label}
				className="text-sm cursor-pointer font-lato bg-transparent w-full p-3 outline-none placeholder:font-normal"
			/>
			{open ? (
				<FaCaretUp className="text-slate-600" />
			) : (
				<FaCaretDown className="text-slate-400" />
			)}
		</div>
	);
}
