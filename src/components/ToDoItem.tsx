import {
  Checkbox,
  IconButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip,
} from "@mui/material";
import type { ToDo } from "../types";
import { useToDo } from "../contexts/context";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ToDoItem = ({ id, text, completed }: ToDo) => {
  const { toggleToDo, deleteToDo, startEditing } = useToDo();

  const handleEdit = () => {
    startEditing({ id, text, completed });
  };

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

      <ListItemText
        primary={text}
        sx={{
          textDecoration: completed ? "line-through" : "none",
          color: completed ? "lightgray" : "inherit",
          textWrap: "wrap",
          width: "25%",
        }}
      />
      <ListItemSecondaryAction>
        <Tooltip title="Edit">
          <IconButton edge="end" aria-label="edit" onClick={handleEdit}>
            <EditIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Delete">
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => deleteToDo(id)}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </ListItemSecondaryAction>
    </>
  );
};

export default ToDoItem;
