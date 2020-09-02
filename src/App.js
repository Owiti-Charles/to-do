import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Go home','From there']);
  return (
    <div className="App">

      <h2>home</h2>
      <input/>
      <button>Add To-Do</button>
      <ul>
        {todos.map(todo =>(
          <li>{todo}</li>))}
      </ul>
    </div>
  );
}

export default App;
