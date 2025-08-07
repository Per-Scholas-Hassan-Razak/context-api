import { Box, Button, TextField } from "@mui/material";
import { useToDo } from "../contexts/context";
import { useState } from "react";

const ToDoInput = () => {
  const [task, setTask] = useState("")

  const { addToDo } = useToDo();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addToDo(task)
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: 2,
        justifyContent:'center',
        flexWrap:'wrap'
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <TextField
        fullWidth
        id="outlined-basic"
        label="Add A Task"
        variant="outlined"
        sx={{ marginTop: "10px" }}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button type="submit" color="primary" variant="contained">
        Add To Do
      </Button>
    </Box>
  );
};

export default ToDoInput;
