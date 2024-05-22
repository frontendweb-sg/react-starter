import {memo} from "react";

type TableRowProps = React.TableHTMLAttributes<HTMLTableRowElement>;
const TableRow = memo(function TableRow({children, ...rest}: TableRowProps) {
	return <tr {...rest}>{children}</tr>;
});

export default TableRow;
