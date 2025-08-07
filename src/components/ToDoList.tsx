import { Box, List, ListItem, Typography } from "@mui/material";
import { useToDo } from "../contexts/context";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const { toDoList } = useToDo();

  return (
    <>
      <Typography align="center" variant="h6">
        Task Items
      </Typography>
      <Box
        sx={{
          width: "100%",
          maxHeight: "200px",
          overflowY: "auto",
          border: `1px solid blue`,
          borderRadius:'5px',
          padding: 2,
          backgroundColor: "gray",
          color:'white'
        }}
      >
        <List>
          {toDoList.map((item) => (
            <ListItem key={item.id}>
              <ToDoItem {...item} />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default ToDoList;
