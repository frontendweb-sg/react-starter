import {memo} from "react";

type TableHeadProps = React.HTMLAttributes<HTMLTableSectionElement>;
const TableHead = memo(function TableHead({children}: TableHeadProps) {
	return (
		<thead className="bg-green-400 rounded-t-md overflow-hidden">
			{children}
		</thead>
	);
});

export default TableHead;
