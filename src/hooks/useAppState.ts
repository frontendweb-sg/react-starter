import {useContext} from "react";

import {AppContext, AppState} from "../context/root";

export function useAppState() {
	const context = useContext<AppState | null>(AppContext);
	if (!context) throw new Error("app context can not be undefined!");
	return context;
}
