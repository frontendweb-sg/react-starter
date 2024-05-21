import {tailwindClassesMapping} from "../utils/tailwind-css-utils";

export type SxProps = {
	[Key in keyof typeof tailwindClassesMapping]?: keyof (typeof tailwindClassesMapping)[Key];
};
export type GridCols = keyof typeof tailwindClassesMapping.gridCols;
export type GridRows = keyof typeof tailwindClassesMapping.gridRows;
export type Col = keyof typeof tailwindClassesMapping.cols;
export type Row = keyof typeof tailwindClassesMapping.rows;
