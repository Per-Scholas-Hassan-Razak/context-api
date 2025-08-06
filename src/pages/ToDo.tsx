import { Box, Container, Divider, Typography } from "@mui/material";
import ToDoInput from "../components/ToDoInput";

import ToDoList from "../components/ToDoList";
import Filter from "../components/Filter";

import { useToDo } from "../contexts/context";

const ToDo = () => {
  

  return (
    <Container maxWidth="sm">
      <Box mt={3} p={4}>
        <Typography variant="h4" align="center">
          To Do Management Application
        </Typography>

        <Divider variant='fullWidth'/>
        <ToDoInput/>
        <ToDoList />
       <Filter />
      </Box>
    </Container>
  );
};

export default ToDo;
