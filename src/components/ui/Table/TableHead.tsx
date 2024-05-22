import {memo} from "react";

type TableHeadProps = React.HTMLAttributes<HTMLTableSectionElement>;
const TableHead = memo(function TableHead({children}: TableHeadProps) {
	return <thead className="bg-green-500">{children}</thead>;
});

export default TableHead;
