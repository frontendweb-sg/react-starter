import {useEffect, useRef} from "react";

export default function useClickOutside<T extends HTMLElement>(
	fn?: () => void,
) {
	const ref = useRef<T>(null);
	useEffect(() => {
		const handleClick = (event: Event) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				fn?.();
			}
		};
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, [fn]);
	return ref;
}
