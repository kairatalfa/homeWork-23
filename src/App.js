import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addTodo } from "./store/todoSlice";
function App() {
  const [text, setText] = useState();
  const todos = useSelector((state) => state.todos.todos); // ичинде инпуттун значениесы менен келди!
  console.log(todos);
  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();

    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div className="App">
      <form onSubmit={addTask}>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button type="submit">submit</button>
      </form>
      <ul>
        {todos.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </ul>
      <button>delete</button>
    </div>
  );
}

export default App;
