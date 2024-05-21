import Button from "./components/ui/Button";
import Col from "./components/ui/Col";
import Grid from "./components/ui/Grid";
import Typography from "./components/ui/Typography";

function App() {
	return (
		<Grid gridCols="4">
			<Col>
				<Typography>Buttons</Typography>
				<Button>Hello World</Button>
				<Button pills color="info" disabled>
					Hello World
				</Button>
				<Button color="warning">Hello World</Button>
				<Button color="danger">Hello World</Button>
				<Button variant="outlined" color="danger">
					Hello World
				</Button>
			</Col>
		</Grid>
	);
}

export default App;
