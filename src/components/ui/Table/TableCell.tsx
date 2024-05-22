import {memo} from "react";

type CellProps<T extends React.ElementType> = {
	as?: T;
} & React.ComponentPropsWithoutRef<T>;

const TableCell = memo(function TableCell<T extends React.ElementType>({
	as,
	children,
	...rest
}: CellProps<T>) {
	const Component = as ?? "th";
	return <Component {...rest}>{children}</Component>;
});

export default TableCell;
