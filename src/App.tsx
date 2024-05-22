import {FaTrash} from "react-icons/fa";
import {FaPencil} from "react-icons/fa6";

import Col from "./components/ui/Col";
import ConfirmBox from "./components/ui/ConfirmBox";
import Grid from "./components/ui/Grid";
import Table, {type ColumnProps} from "./components/ui/Table";

interface Person {
	id: string | number;
	firstName: string;
	lastName: string;
	age: number;
	fullName?: string;
}

type PersonKey = keyof Person;

function App() {
	const COLUMNS: ColumnProps<Person, PersonKey>[] = [
		{
			field: "id",
			headerName: "ID",
			width: 100,
			renderProps: (
				option: Person,
				column: ColumnProps<Person, keyof Person>,
			) => (
				<div>
					{option.id} - {column.headerName}
				</div>
			),
		},
		{field: "firstName", headerName: "First name", width: 130},
		{field: "fullName", headerName: "Last name", width: 130},
		{
			field: "age",
			headerName: "Age",
			width: 90,
		},
		{
			field: "id",
			headerName: "Action",
			renderProps: (option: Person) => {
				return (
					<>
						<button onClick={() => alert(JSON.stringify(option))}>
							<FaTrash />
						</button>
						<button>
							<FaPencil />
						</button>
					</>
				);
			},
		},
	];

	const ROWS: Person[] = [
		{id: 1, lastName: "Snow", firstName: "Jon", age: 35},
		{id: 2, lastName: "Lannister", firstName: "Cersei", age: 42},
		{id: 3, lastName: "Lannister", firstName: "Jaime", age: 45},
		{id: 4, lastName: "Stark", firstName: "Arya", age: 16},
		{id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 12},
		{id: 6, lastName: "Melisandre", firstName: "", age: 150},
		{id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44},
		{id: 8, lastName: "Frances", firstName: "Rossini", age: 36},
		{id: 9, lastName: "Roxie", firstName: "Harvey", age: 65},
	];

	return (
		<div className="p-5">
			<Table columns={COLUMNS} rows={ROWS} />

			<button>Open</button>
			<ConfirmBox />

			<Grid cols="2">
				<Col>A</Col>
				<Col>B</Col>
			</Grid>
		</div>
	);
}

export default App;
