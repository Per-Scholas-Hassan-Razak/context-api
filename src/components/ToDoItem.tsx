import {  Button, Checkbox, IconButton, ListItemIcon, ListItemSecondaryAction, ListItemText } from "@mui/material"
import type { ToDo } from "../types"
import { useToDo } from "../contexts/context";

const ToDoItem = ({id, text, completed}:ToDo) => {

const {toggleToDo} = useToDo();

    return (
      <>
 <ListItemIcon>
        <Checkbox
          edge="start"
          checked={completed}
          onChange={() => toggleToDo(id)}
          inputProps={{ "aria-label": "toggle task" }}
        />
      </ListItemIcon>

      <ListItemText primary={text}  sx={{
          textDecoration: completed ? "line-through" : "none",
          color: completed ? "lightgray" : "inherit",
        }}/>
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit">
          <Button variant="contained">Edit</Button>
        </IconButton>
        <IconButton edge="end" aria-label="delete">
          <Button variant="contained">Delete</Button>
        </IconButton>
      </ListItemSecondaryAction>
    </>
    )
}

export default ToDoItem