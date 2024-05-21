import {useState} from "react";

import useToggle from "./useToggle";

type Props<T> = {
	options: T[];
	value?: string;
	getOptionValue?: (option: T) => string | number | object;
	getOptionLabel?: (option: T) => string;
};
export default function useSelect<T>({
	options,
	value,
	getOptionValue,
	getOptionLabel,
}: Props<T>) {
	const [selected, setSelected] = useState<
		T | string | T[keyof T] | object | number
	>(value!);
	const [currentIndex, setCurrentIndex] = useState(0);

	const {open, handleOpen, handleClose, handleToggle} = useToggle();

	const getValue = (option: T) =>
		getOptionValue ? getOptionValue(option) : option["value" as keyof T];

	const getLabel = (option: T) =>
		getOptionLabel ? getOptionLabel(option) : option["value" as keyof T];

	const handleKeyChange = (event: React.KeyboardEvent<HTMLDivElement>) => {
		const code = event.code;
		switch (code) {
			case "ArrowDown":
				if (!open) handleOpen();
				setCurrentIndex((prev) => (prev < options.length - 1 ? ++prev : 0));
				break;
			case "ArrowUp":
				setCurrentIndex((prev) => (prev > 0 ? --prev : options.length - 1));
				break;
			case "Enter":
				event.preventDefault();
				setSelected(getValue(options[currentIndex]));
				break;
			default:
				handleClose();
				break;
		}
	};

	return {
		open,
		selected,
		setSelected,
		handleOpen,
		handleClose,
		handleToggle,
		currentIndex,
		handleKeyChange,
		getLabel,
		getValue,
	};
}
