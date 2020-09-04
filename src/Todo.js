import React, { useState } from "react";
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
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h2>trial Modal</h2>
          <button onClick={(e) => setOpen(false)}>close</button>
        </div>
      </Modal>
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
        <button onClick={(e) => setOpen(true)}>edit</button>
        <DeleteIcon
          variant="contained"
          color="secondary"
          type="submit"
          onClick={(event) =>
            db.collection("tasks").doc(props.todo.id).delete()
          }
        />
      </List>
    </>
  );
}

export default Todo;
