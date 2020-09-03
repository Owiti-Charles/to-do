import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
} from "@material-ui/core";
import "./Todo.css";
import db from "./firebase";
import DeleteIcon from '@material-ui/icons/Delete';

function Todo(props) {
  console.log(props);
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.todo.todo.todo}
          secondary={props.todo.id}
        />
      </ListItem>
      <DeleteIcon
        variant="contained"
        color="secondary"
        type="submit"
        onClick={(event) => db.collection("tasks").doc(props.todo.id).delete()}
      />
    </List>
  );
}

export default Todo;
