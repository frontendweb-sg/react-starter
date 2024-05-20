import {useCallback, useState} from "react";

import {AppContent} from "../utils/content";

export type ConfirmState = {
	visible?: boolean;
	content?: string;
	onSubmit: () => void;
};

export default function useConfirm() {
	const [confirmState, setConfirmState] = useState<ConfirmState>({
		visible: false,
		content: AppContent.confirmBoxContent,
		onSubmit: () => {},
	});

	const handleConfirm = useCallback((state: ConfirmState) => {
		setConfirmState((prev) => ({...prev, ...state, visible: true}));
	}, []);

	const handleConfirmClose = useCallback(() => {
		setConfirmState((prev) => ({...prev, visible: false}));
	}, []);

	return {confirmState, handleConfirm, handleConfirmClose};
}
