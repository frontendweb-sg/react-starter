import {FaMessage, FaUser, FaUsers} from "react-icons/fa6";

import Button from "./components/ui/Button";
import Col from "./components/ui/Col";
import Form from "./components/ui/Form";
import Grid from "./components/ui/Grid";
import Input from "./components/ui/Input";
import Select from "./components/ui/Select";
import Tabs, {TabContent} from "./components/ui/Tabs";
import Textarea from "./components/ui/Textarea";
import Typography from "./components/ui/Typography";

import {useFormik} from "formik";

const genderOption = [
	{label: "Male", value: "male"},
	{label: "Female", value: "female"},
	{label: "Unknwon", value: "unkown"},
];

const users = [
	{
		userId: 1,
		id: 1,
		title:
			"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
		body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
	},
	{
		userId: 1,
		id: 2,
		title: "qui est esse",
		body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
	},
	{
		userId: 1,
		id: 3,
		title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
		body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
	},
	{
		userId: 1,
		id: 4,
		title: "eum et est occaecati",
		body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
	},
];

function App() {
	const {values, handleChange, setFieldValue, handleSubmit} = useFormik({
		initialValues: {
			name: "",
			email: "",
			gender: "male",
			summary: "",
			user: "qui est esse",
		},
		onSubmit(values) {
			console.log("values", values);
		},
	});

	return (
		<Input
			label="Name"
			name="name"
			value={values.name}
			startIcon={<FaUser />}
			endIcon={<FaUsers />}
			onChange={handleChange}
		/>
	);
}

export default App;
