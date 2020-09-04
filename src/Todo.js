import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";
import "./Todo.css";
import db from "./firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";

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
  const [input, setInput] = useState(props.todo.todo.todo);
  const updateTodo = () => {
    // update the todo
    db.collection("tasks").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    ); //merge prevent from overighting

    setOpen(false);
    console.log(input);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h2>Update Your ToDo</h2>
          <form>
            <FormControl>
              <InputLabel>Update Todo</InputLabel>
              <Input
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
            </FormControl>

            <Button onClick={updateTodo} color="primary" variant="contained">
              Save
            </Button>
          </form>
        </div>
      </Modal>
      <List className="todo_list">
        <div>
          <ListItem>
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={props.todo.todo.todo}
              secondary={props.todo.id}
            />
          </ListItem>
        </div>

        <div className="icons">
          <EditTwoToneIcon onClick={(e) => setOpen(true)}  className="edit"/>
          <DeleteIcon
            variant="contained"
            color="secondary"
            type="submit"
            onClick={(event) =>
              db.collection("tasks").doc(props.todo.id).delete()
            }
          />
        </div>
        
      </List>
      <hr className="hr"/>
    </>
  );
}

export default Todo;
