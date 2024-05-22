import {memo} from "react";

import classNames from "classnames";

type CellProps<T extends React.ElementType> = {
	as?: T;
	className?: string;
} & React.ComponentPropsWithoutRef<T>;

const TableCell = memo(function TableCell<T extends React.ElementType>({
	as,
	children,
	className,
	...rest
}: CellProps<T>) {
	const Component = as ?? "th";
	return (
		<Component
			className={classNames("p-1 border border-gray-50 ", className)}
			{...rest}>
			{children}
		</Component>
	);
});

export default TableCell;
