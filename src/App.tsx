import {useEffect, useRef} from "react";
import {FaH} from "react-icons/fa6";
import {RouterProvider} from "react-router-dom";

import Accordion from "./components/ui/Accordion";
import Autocomplete from "./components/ui/Autocomplete";
import Checkbox from "./components/ui/Checkbox";
import Col from "./components/ui/Col";
import ConfirmBox from "./components/ui/ConfirmBox";
import Form, {FormButtons} from "./components/ui/Form";
import Grid from "./components/ui/Grid";
import Input from "./components/ui/Input";
import Modal from "./components/ui/Modal";
import Radio from "./components/ui/Radio";
import Select from "./components/ui/Select";
import Tabs from "./components/ui/Tabs";
import Typography from "./components/ui/Typography";
import {useAppState} from "./hooks/useAppState";
import useToggle from "./hooks/useToggle";
import router from "./router";

import {upperFirst} from "lodash";

function App() {
	const {handleConfirm} = useAppState();
	const {open, handleToggle, handleClose} = useToggle();
	const onConfirm = () => {
		handleConfirm({
			onSubmit() {
				alert("Are you sure?");
			},
		});
	};

	const firstColRef = useRef(null);
	console.log("open", open);
	useEffect(() => {
		if (firstColRef.current) {
			console.log(firstColRef.current);
		}
	}, [firstColRef]);
	return (
		<>
			<button onClick={handleToggle}>Open Modal</button>
			<Modal size="md" open={open} onClose={handleClose} label="Hi, I am modal">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit provident
				beatae eius? Neque earum, voluptatum doloribus praesentium provident
				pariatur sapiente nam sint accusantium cum sit, corrupti omnis deserunt
				ab! Exercitationem!
			</Modal>
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

			<Input startIcon={<FaH />} name="Home" />
			<h1>{upperFirst("Hello")}</h1>
			<Grid gridCols="2">
				<Col ref={firstColRef}>
					<Typography component="div">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
						cumque repellat modi autem, error in expedita unde quia repudiandae
						quae reprehenderit. Non eius, harum culpa eaque mollitia error eos.
						Fugit.
					</Typography>
				</Col>
				<Col>
					<Select />
					<Autocomplete />
				</Col>
				<Col>
					<Tabs />
				</Col>
				<Col>
					<Radio />
					<Checkbox />
				</Col>
				<ConfirmBox />
			</Grid>
			<button onClick={onConfirm}>CLick</button>

			<Form>
				<FormButtons
					box={{
						flexShrink: "0",
					}}>
					<button>Hi</button>
					<button>Hello</button>
				</FormButtons>
			</Form>
		</>
	);
}

export default App;
