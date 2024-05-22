import {memo} from "react";

type TableRowProps = React.TableHTMLAttributes<HTMLTableRowElement>;
const TableRow = memo(function TableRow({children}: TableRowProps) {
	return <tr>{children}</tr>;
});

export default TableRow;
