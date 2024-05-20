import {FaH} from "react-icons/fa6";
import {RouterProvider} from "react-router-dom";

import Accordion from "./components/ui/Accordion";
import Autocomplete from "./components/ui/Autocomplete";
import Checkbox from "./components/ui/Checkbox";
import ConfirmBox from "./components/ui/ConfirmBox";
import Input from "./components/ui/Input";
import Modal from "./components/ui/Modal";
import Radio from "./components/ui/Radio";
import Select from "./components/ui/Select";
import Tabs from "./components/ui/Tabs";
import Typography from "./components/ui/Typography";
import {useAppState} from "./hooks/useAppState";
import router from "./router";

import {upperFirst} from "lodash";

function App() {
	const {handleConfirm} = useAppState();

	const handleClose = () => {
		handleConfirm({
			onSubmit() {
				alert("Are you sure?");
			},
		});
	};
	return (
		<>
			<RouterProvider router={router} />
			<Accordion>
				<Accordion.Item>
					<Accordion.Header>Hello</Accordion.Header>
					<Accordion.Content>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
						cumque repellat modi autem, error in expedita unde quia repudiandae
						quae reprehenderit. Non eius, harum culpa eaque mollitia error eos.
						Fugit.
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item>
					<Accordion.Header>Hello</Accordion.Header>
					<Accordion.Content>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
						cumque repellat modi autem, error in expedita unde quia repudiandae
						quae reprehenderit. Non eius, harum culpa eaque mollitia error eos.
						Fugit.
					</Accordion.Content>
				</Accordion.Item>
			</Accordion>
			<Modal />
			<Input startIcon={<FaH />} name="Home" />
			<h1>{upperFirst("Hello")}</h1>
			<Typography component="div">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cumque
				repellat modi autem, error in expedita unde quia repudiandae quae
				reprehenderit. Non eius, harum culpa eaque mollitia error eos. Fugit.
			</Typography>
			<Select />
			<Autocomplete />
			<Tabs />
			<Radio />
			<Checkbox />
			<ConfirmBox />
			<button onClick={handleClose}>CLick</button>
		</>
	);
}

export default App;
