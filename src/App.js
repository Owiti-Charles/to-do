import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "./Todo";
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  // quering from firebase
  useEffect(() => {
    db.collection('tasks').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => ({id:doc.id, todo:doc.data()})));
    });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    // posting to database
    db.collection('tasks').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    // setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <form className="form">
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
      <hr/>
      <ul className="ul">
        {todos.map((todo) => (
          <Todo todo={todo} />
          
        ))}
        
      </ul>
    </div>
  );
}

export default App;
