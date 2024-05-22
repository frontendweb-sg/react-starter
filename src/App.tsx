import {useState} from "react";
import {FaPlus, FaTrash} from "react-icons/fa";
import {FaPencil} from "react-icons/fa6";

import Accordion from "./components/ui/Accordion";
import Button from "./components/ui/Button";
import CheckboxGroup from "./components/ui/CheckboxGroup";
import Col from "./components/ui/Col";
import ConfirmBox from "./components/ui/ConfirmBox";
import Form from "./components/ui/Form";
import Grid from "./components/ui/Grid";
import IconButton from "./components/ui/IconButton";
import Input from "./components/ui/Input";
import Modal from "./components/ui/Modal";
import RadioGroup from "./components/ui/RadioGroup";
import Select from "./components/ui/Select";
import Table, {type ColumnProps} from "./components/ui/Table";
import Textarea from "./components/ui/Textarea";
import Typography from "./components/ui/Typography";
import {useAppState} from "./hooks/useAppState";
import useToggle from "./hooks/useToggle";

import {useFormik} from "formik";

interface Person {
	id: string | number;
	firstName: string;
	lastName: string;
	age: number;
	fullName?: string;
}

type PersonKey = keyof Person;

function App() {
	const [value, setValue] = useState("one");
	const [item, setItems] = useState("");
	const {open, handleOpen, handleClose} = useToggle();
	const {handleConfirm} = useAppState();
	const {values, handleChange, setFieldValue, handleSubmit} = useFormik({
		initialValues: {
			name: "",
			email: "",
			userName: "Snow",
			gender: "male",
			skills: [],
			summary: "",
		},
		onSubmit(values) {
			console.log("values", values);
		},
	});
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
		{field: "fullName", headerName: "Last name"},
		{
			field: "age",
			headerName: "Age",
			width: 90,
		},
		{
			field: "id",
			headerName: (
				<button onClick={() => alert("hi")}>
					<FaPlus />
				</button>
			),
			renderProps: (option: Person) => {
				return (
					<div className="space-x-2">
						<IconButton onClick={() => alert(JSON.stringify(option))}>
							<FaPencil size={14} />
						</IconButton>
						<IconButton
							color="danger"
							onClick={() => alert(JSON.stringify(option))}>
							<FaTrash size={14} />
						</IconButton>
					</div>
				);
			},
		},
	];

	const ROWS: Person[] = [
		{id: 1, lastName: "Snow", firstName: "Jon", age: 35},
		{id: 2, lastName: "Lannister", firstName: "Cersei", age: 42},
		{id: 3, lastName: "Lannister", firstName: "Jaime", age: 45},
		{id: 4, lastName: "Stark", firstName: "Arya", age: 16},
	];

	const Values = [
		{id: 1, label: "One", value: "one"},
		{id: 2, label: "Two", value: "two"},
		{id: 3, label: "Three", value: "three"},
		{id: 4, label: "Four", value: "four"},
	];
	return (
		<Grid cols="3" className="p-4 gap-5">
			<Col>
				<Table columns={COLUMNS} rows={ROWS} />
			</Col>
			<Col>
				<Form onSubmit={handleSubmit}>
					<Typography gutterBottom variant="h1">
						User form
					</Typography>
					<Select
						name="item"
						defalutValue={ROWS[0]}
						label="Item"
						options={ROWS}
						getOptionLabel={(option) => option.firstName}
					/>
					<Input
						placeholder="Name"
						name="name"
						value={values.name}
						onChange={handleChange}
					/>
					<Input
						placeholder="Email"
						name="email"
						value={values.email}
						onChange={handleChange}
					/>
					<RadioGroup
						defaultValue={values.gender}
						onChange={handleChange}
						options={[
							{name: "gender", value: "male", label: "Male"},
							{name: "gender", value: "female", label: "Female"},
							{name: "gender", value: "unknown", label: "Unknown"},
						]}
					/>
					<CheckboxGroup
						label="Skills"
						defaultValues={values.skills}
						onChange={handleChange}
						options={[
							{name: "skills", value: "html", label: "Html"},
							{name: "skills", value: "css", label: "Css"},
							{name: "skills", value: "js", label: "Js"},
							{name: "skills", value: "react", label: "React"},
							{name: "skills", value: "next", label: "Next"},
						]}
					/>
					<Textarea
						rows={5}
						placeholder="Summary"
						name="summary"
						value={values.summary}
						onChange={handleChange}
					/>
					<Button block className="mb-5">
						Submit
					</Button>
					{JSON.stringify(values, null, 4)}
				</Form>
			</Col>
			<Col>
				<Typography gutterBottom>Accordion</Typography>
				<Accordion className="space-y-2">
					<Accordion.Item>
						<Accordion.Header>Hello world</Accordion.Header>
						<Accordion.Content>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
							esse quas nobis? Ratione dolorem quae veritatis asperiores porro.
							Ullam, nostrum! Nobis officia iure in obcaecati. Illo, inventore
							officiis? Cum, labore.
						</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item>
						<Accordion.Header>Hello world 1</Accordion.Header>
						<Accordion.Content>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
							esse quas nobis? Ratione dolorem quae veritatis asperiores porro.
							Ullam, nostrum! Nobis officia iure in obcaecati. Illo, inventore
							officiis? Cum, labore.
						</Accordion.Content>
					</Accordion.Item>
				</Accordion>

				<Typography gutterBottom className="mt-5">
					Modals
				</Typography>

				<div className="space-x-4">
					<Button onClick={handleOpen}>Modal</Button>
					<Button
						onClick={() =>
							handleConfirm({
								onSubmit() {
									alert("deleted");
								},
							})
						}
						color="danger"
						icon={<FaTrash size={12} />}>
						Delte
					</Button>
				</div>
				<Modal label="Modal" size="md" open={open} onClose={handleClose}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
					maxime perspiciatis sit ea quam labore corporis explicabo doloremque
					nobis laboriosam repellendus, at reiciendis perferendis nulla commodi
					rerum ratione sequi illum!
				</Modal>
				<ConfirmBox />
			</Col>
		</Grid>
	);
}

export default App;
