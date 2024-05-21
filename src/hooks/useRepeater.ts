import {useState} from "react";

import {getRandomId} from "../utils";

type RepeaterProps<T> = {
	initialValue: T;
};

export default function useRepeater<T>({initialValue}: RepeaterProps<T>) {
	const [state, setState] = useState<T[]>([]);

	const addItem = () => {
		const value = {id: getRandomId(), ...initialValue};
		console.log("value", value);
		setState((prev: T[]) => {
			return [...(prev ?? []), value];
		});
	};
	const removeItem = (id?: string | number) => {
		const copyState = [...state];
		copyState.splice(index, 1);
		setState(copyState);
	};
	console.log("state", state);

	return {
		state,
		addItem,
		removeItem,
	};
}
