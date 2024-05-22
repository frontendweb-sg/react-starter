import {ReactNode, useState} from "react";
import {FaCaretDown, FaCaretUp} from "react-icons/fa";

import useClickOutside from "../../hooks/useClickOutside";
import useToggle from "../../hooks/useToggle";
import {getRandomId} from "../../utils";
import FormGroup from "./FormGroup";

import classNames from "classnames";

type SelectProps<T> = {
	options: T[];
	label?: string;
	name: string;
	defalutValue?: T;
	getOptionLabel?: (option: T) => ReactNode;
	onChange?: (option: T) => void;
};
export default function Select<T>({
	options,
	getOptionLabel,
	defalutValue,
	onChange,
	label,
}: SelectProps<T>) {
	const [selected, setSelected] = useState<null | T>(defalutValue!);
	const {open, handleClose, handleToggle} = useToggle();

	const optionLabel = (option: T) =>
		getOptionLabel ? getOptionLabel(option) : option["label" as keyof T];
	const getLabel = (option: T) =>
		typeof option === "object" ? optionLabel(option) : option;

	const handleChange = (option: T) => {
		setSelected(option);
		onChange?.(option);
	};
	const elemRef = useClickOutside<HTMLDivElement>(handleClose);
	return (
		<FormGroup label={label} className="relative z-10" ref={elemRef!}>
			<div
				className={classNames(
					"ring-1 hover:ring-indigo-500 p-2 relative rounded-md",
					open && "ring-indigo-500",
				)}
				onClick={handleToggle}>
				<input
					className="outline-none"
					readOnly
					value={getLabel(selected as T) as string}
				/>
				<span className="absolute right-2 ring-indigo-500 -translate-y-1/2 top-1/2">
					{open ? <FaCaretUp className="ring-red-500" /> : <FaCaretDown />}
				</span>
			</div>
			{open && (
				<div className="absolute  bg-white shadow-md w-full mt-1 p-2 rounded-b-md">
					{options.map((option) => (
						<div onClick={() => handleChange(option)} key={getRandomId()}>
							{getLabel(option) as ReactNode}
						</div>
					))}
				</div>
			)}
		</FormGroup>
	);
}
