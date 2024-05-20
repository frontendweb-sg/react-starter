import {createContext, ReactNode} from "react";

import useConfirm, {type ConfirmState} from "../hooks/useConfirm";

export interface AppState {
	confirmState: ConfirmState;
	handleConfirm: (state: ConfirmState) => void;
	handleConfirmClose: () => void;
}
export const AppContext = createContext<AppState | null>(null);

export default function AppProvider({children}: {children: ReactNode}) {
	const {confirmState, handleConfirm, handleConfirmClose} = useConfirm();
	return (
		<AppContext.Provider
			value={{confirmState, handleConfirm, handleConfirmClose}}>
			{children}
		</AppContext.Provider>
	);
}
