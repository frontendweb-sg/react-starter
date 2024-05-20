import {FaH} from "react-icons/fa6";
import Accordion from "./components/ui/Accordion";
import Input from "./components/ui/Input";
import Modal from "./components/ui/Modal";
import Typography from "./components/ui/Typography";

function App() {
	return (
		<>
			<Accordion />
			<Modal />
			<Input startIcon={<FaH />} name="Home" />
			<h1>Hello</h1>
			<Typography component="div">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cumque
				repellat modi autem, error in expedita unde quia repudiandae quae
				reprehenderit. Non eius, harum culpa eaque mollitia error eos. Fugit.
			</Typography>
		</>
	);
}

export default App;
