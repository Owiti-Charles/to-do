import React, { useState } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState(["Go home", "From there"]);
  const [input, setInput] = useState("");
  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h2>home</h2>
      <form>
        <FormControl>
          <InputLabel>Write a new To Do item</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={addTodo}
        >
          Add To-Do
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo item={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
