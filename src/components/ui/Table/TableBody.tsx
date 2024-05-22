import {memo} from "react";

type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>;
const TableBody = memo(function TableBody({children}: TableBodyProps) {
	return <tbody>{children}</tbody>;
});

export default TableBody;
