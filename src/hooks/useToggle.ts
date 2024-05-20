import {useState} from "react";

export default function useToggle() {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleToggle = () => setOpen((open) => !open);
	return {
		open,
		handleOpen,
		handleClose,
		handleToggle,
	};
}
