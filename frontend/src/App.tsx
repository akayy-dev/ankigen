import './App.css';
import DragAndDrop from './components/DragAndDrop/DragAndDrop';
import HeaderBar from './components/HeaderBar/HeaderBar';

function App() {
	return (
		<div className="flex flex-col">
			<HeaderBar />
			<DragAndDrop />
		</div>
	)
}

export default App
