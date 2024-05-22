import {ReactNode, useState} from "react";

import useToggle from "../../hooks/useToggle";
import {getRandomId} from "../../utils";

type AutocompleteProps<T> = {
	options: T[];
	getOptionLabel?: (option: T) => ReactNode;
	defaultValue?: string;
};
export default function Autocomplete<T>({
	options,
	getOptionLabel,
}: AutocompleteProps<T>) {
	const [selected, setSelected] = useState<T>();
	const {open, handleToggle} = useToggle();
	const getLabel = (option: T) =>
		getOptionLabel ? getOptionLabel(option) : option["label" as keyof T];

	const handleChange = (option: T) => {
		console.log("o", option);
		setSelected(option);
	};
	console.log("selected", selected);
	return (
		<div className="relative">
			<div onClick={handleToggle} className="p-2 border rounded-md">
				<input readOnly className="outline-none" />
			</div>

			{open && (
				<div className="absolute top-full">
					{options.map((option: T) => (
						<div key={getRandomId()} onClick={() => handleChange(option)}>
							{getLabel(option) as string}
						</div>
					))}
				</div>
			)}
		</div>
	);
}
