import React from "react";
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core";

function Todo(props) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>  
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Todo.." secondary={props.item} />
      </ListItem>
    </List>
  );
}

export default Todo;