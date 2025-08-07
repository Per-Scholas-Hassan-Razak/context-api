import { Container, Divider, Paper, Typography } from "@mui/material";
import ToDoInput from "../components/ToDoInput";

import ToDoList from "../components/ToDoList";
import Filter from "../components/Filter";

const ToDo = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper elevation={23}
      sx={{
        padding: 4,
        borderRadius: 2,
        width: "100%",
        maxWidth: "500px",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        justifyContent: "flex-start",
        alignItems: "center",
        height: "700px",
      }}>
        <Typography variant="h4" align="center">
          To Do Management Application
        </Typography>
        <ToDoInput />
        <Filter />
        <ToDoList />
      </Paper>
    </Container>
  );
};

export default ToDo;
