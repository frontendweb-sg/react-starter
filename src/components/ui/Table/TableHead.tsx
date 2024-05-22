import {memo} from "react";

type TableHeadProps = React.HTMLAttributes<HTMLTableSectionElement>;
const TableHead = memo(function TableHead({children}: TableHeadProps) {
	return <thead>{children}</thead>;
});

export default TableHead;
