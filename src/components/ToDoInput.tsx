import { Box, Button, TextField } from "@mui/material";

const ToDoInput = () => {
  return (
    <Box
    sx={{
        width:'600px',
        display:'flex',
        gap:3
    }}
    >
      <TextField
        fullWidth
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        sx={{ marginTop: "10px" }}
      />
      <Button variant="contained">Add To Do</Button>
    </Box>
  );
};

export default ToDoInput;
