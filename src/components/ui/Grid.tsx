import {memo} from "react";

import {GridCols, GridRows} from "../../types";
import {tailwindClassesMapping} from "../../utils/tailwind-css-utils";

import classNames from "classnames";

type GridProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
	cols?: GridCols;
	rows?: GridRows;
};
const Grid = memo(function GridComponent({
	cols,
	rows,
	children,
	className,
	...rest
}: GridProps) {
	const css = classNames(
		"grid relative",
		tailwindClassesMapping.gridCols[
			cols as keyof typeof tailwindClassesMapping.gridCols
		],
		tailwindClassesMapping.gridRows[
			rows as keyof typeof tailwindClassesMapping.gridRows
		],
		className,
	);

	return (
		<div className={css ? css : undefined} {...rest}>
			{children}
		</div>
	);
});

export default Grid;
