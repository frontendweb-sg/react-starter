import {FaTrash} from "react-icons/fa6";

import useRepeater from "../../hooks/useRepeater";
import Form from "../ui/Form";
import Grid from "../ui/Grid";
import Input from "../ui/Input";

export default function UserForm() {
	const value = {
		id: "",
		name: "",
		gender: "male",
		email: "",
	};

	const {state, removeItem, addItem} = useRepeater<typeof value>({
		initialValue: value,
	});

	return (
		<>
			{JSON.stringify(state)}
			<button onClick={addItem}>Add</button>
			<Form>
				{state.map((item, index) => (
					<Grid cols="3" className="gap-4 pr-6" key={item.id}>
						<Input label="Name" name={item.name} />
						<Input label="email" name={item.email} />
						<Input label="Gender" name={item.gender} />
						<button
							onClick={() => removeItem(index)}
							className="absolute right-0 -translate-y-1/2 top-1/2 mt-1">
							<FaTrash />
						</button>
					</Grid>
				))}
			</Form>
		</>
	);
}
