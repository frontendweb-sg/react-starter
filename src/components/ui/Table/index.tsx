import {ReactNode} from "react";

import {getRandomId} from "../../../utils";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

export type ColumnProps<T, K extends keyof T> = {
	id?: string;
	field: K;
	headerName: ReactNode;
	description?: string;
	sortable?: boolean;
	valueGetter?: (option: T, column: K) => ReactNode;
	renderProps?: (
		option: T,
		column: ColumnProps<T, K>,
		index: number,
	) => ReactNode;
	width?: number | string;
};

type TableProps<T, K extends keyof T> = {
	rows: T[];
	columns: ColumnProps<T, K>[];
	isSearch?: boolean;
	isSorting?: boolean;
};

function Table<T, K extends keyof T>({rows, columns}: TableProps<T, K>) {
	return (
		<>
			<table className="table-auto rounded-md">
				<TableHead>
					<TableRow className="rounded-t-md overflow-hidden">
						{columns.map((column) => (
							<TableCell width={column.width} key={getRandomId()}>
								{column["headerName"]}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((option: T, index: number) => (
						<TableRow key={getRandomId()}>
							{columns.map((column) => (
								<TableCell as="td" key={getRandomId()}>
									{"renderProps" in column
										? column?.renderProps!(option, column, index)
										: option[column["field"]]}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</table>
		</>
	);
}

export default Table;
