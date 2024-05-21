import {memo} from "react";

import {GridCols, GridRows} from "../../types";
import {tailwindClassesMapping} from "../../utils/tailwind-css-utils";

import classNames from "classnames";

type GridProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
	gridCols?: GridCols;
	gridRows?: GridRows;
};
const Grid = memo(function GridComponent({
	gridCols,
	gridRows,
	children,
	className,
	...rest
}: GridProps) {
	const clases = classNames(
		"grid",
		tailwindClassesMapping.gridCols[
			gridCols as keyof typeof tailwindClassesMapping.gridCols
		],
		tailwindClassesMapping.gridRows[
			gridRows as keyof typeof tailwindClassesMapping.gridRows
		],
		className,
	);

	return (
		<div className={clases} {...rest}>
			{children}
		</div>
	);
});

export default Grid;
