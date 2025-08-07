import {  Button, IconButton, ListItemSecondaryAction, ListItemText } from "@mui/material"
import type { ToDo } from "../types"

const ToDoItem = ({id, text, completed}:ToDo) => {

    return (
      <>
      <ListItemText primary={text}/>
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