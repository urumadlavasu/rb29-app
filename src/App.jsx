import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';
function App() {
  return (
    <div className="mybox">
      <h1>App main component</h1>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
