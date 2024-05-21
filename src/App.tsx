import {FaUser, FaUsers} from "react-icons/fa6";

import Checkbox from "./components/ui/Checkbox";
import CheckboxGroup from "./components/ui/CheckboxGroup";
import Input from "./components/ui/Input";
import RadioGroup from "./components/ui/RadioGroup";

import {useFormik} from "formik";

function App() {
	const {values, handleChange} = useFormik({
		initialValues: {
			name: "",
			email: "",
			gender: "male",
			summary: "",
			user: "qui est esse",
			subject: ["math"],
		},
		onSubmit(values) {
			console.log("values", values);
		},
	});

	return (
		<div className="p-5">
			<RadioGroup
				vertical
				onChange={handleChange}
				defaultValue={values.gender}
				options={[
					{name: "gender", value: "female", label: "Female"},
					{name: "gender", value: "male", label: "Male"},
				]}
			/>

			<CheckboxGroup
				vertical
				onChange={handleChange}
				defaultValues={values.subject}
				options={[
					{name: "subject", value: "math", label: "Math"},
					{name: "subject", value: "science", label: "Science"},
				]}
			/>

			<Input
				name="name"
				placeholder="Enter name"
				value={values.name}
				startIcon={<FaUser />}
				endIcon={<FaUsers />}
				onChange={handleChange}
			/>
			{JSON.stringify(values)}
		</div>
	);
}

export default App;
