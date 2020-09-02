import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(["Go home", "From there"]);
  const [input, setInput] = useState("");
  const addTodo = (event) => {
    setTodos([...todos, input]);
  };
  return (
    <div className="App">
      <h2>home</h2>
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" onClick={addTodo}>Add To-Do</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
