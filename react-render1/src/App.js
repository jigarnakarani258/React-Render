import './App.css';
import ReactRender1_useReducer from './Components/Render_useReducer/ReactRender1_useReducer';
import ReactRender1_useState from './Components/Render_useState/ReactRender1_useState';
import Array_useState from './Components/StateImmutability/Array_useState';
import Object_useState from './Components/StateImmutability/Object_useState';

function App() {
  return (
    <div className="App">
      {/* <h2> Rendering useState Hook component </h2>
      <ReactRender1_useState/>
      <h2> Rendering useReducer Hook component </h2>
      <ReactRender1_useReducer/> */}
      <h2> Rendering object as a state in useState Hook component </h2>
      <Object_useState/>
      <h2> Rendering Array as a state in useState Hook component </h2>
      <Array_useState/>
    </div>
  );
}

export default App;
