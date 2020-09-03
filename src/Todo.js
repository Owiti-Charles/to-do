import React from "react";
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core";
import './Todo.css'

function Todo(props) {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar>
          <Avatar>  
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.item} secondary="daadline" />
      </ListItem>
    </List>
  );
}

export default Todo;