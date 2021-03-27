import './App.scss';
import Component from "./NewComponent";
import Dog from "./Dog";
import ClickEvent from "./CliecEvent";
import HooksTest from "./Hooks";

function App() {
  return (
    <div className="App">
		<Component />
		<div className="content">
			<h1>App component</h1>
		</div>
		<Dog />
		<ClickEvent />
		<HooksTest />
    </div>
  );
}

export default App;
