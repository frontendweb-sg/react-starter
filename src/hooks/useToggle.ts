import {useCallback, useState} from "react";

export default function useToggle() {
	const [open, setOpen] = useState(false);

	const handleOpen = useCallback(() => setOpen(true), []);
	const handleClose = useCallback(() => setOpen(false), []);
	const handleToggle = useCallback(() => setOpen((open) => !open), []);
	return {
		open,
		handleOpen,
		handleClose,
		handleToggle,
	};
}
