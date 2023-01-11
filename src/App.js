import Todo from "./features/counter/todo";
import "./App.css";
import ShowTodo from "./features/counter/showToDo";

function App() {
  return (
    <div className="App">
      <h2>This is a todo app</h2>
      <Todo />
      <ShowTodo />
    </div>
  );
}

export default App;
