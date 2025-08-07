import { Box, Button, TextField } from "@mui/material";
import { useTheme, useToDo } from "../contexts/context";
import { useEffect, useRef, useState } from "react";

const ToDoInput = () => {
  const {theme} = useTheme()
  const [taskText, setTaskText] = useState("");

  const { addToDo, editingItem, editToDo } = useToDo();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!taskText.trim()) return;

    if (editingItem) {
      editToDo(editingItem.id, taskText);
    } else {
      addToDo(taskText);
    }
    setTaskText("");
  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (editingItem) {
      setTaskText(editingItem.text);
      inputRef.current?.focus();
    } else {
      setTaskText("");
    }
  }, [editingItem]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: 2,
        justifyContent: "center",
        flexWrap: "wrap",
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <TextField
        fullWidth
        id="outlined-basic"
        label="Add A Task"
        variant="outlined"
        sx={{
        input: {
          backgroundColor: theme === "dark" ? "#cac6c6ff" : "#ffffff",
          color: theme === "dark" ? "#000000" : "#000000",
        }
      }}
        onChange={(e) => setTaskText(e.target.value)}
        inputRef={inputRef}
        value={taskText}
      />
      <Button type="submit" color="primary" variant="contained">
        {editingItem ? "Update Task" : "Add To Do"}
      </Button>
    </Box>
  );
};

export default ToDoInput;
