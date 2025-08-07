import { Box,  IconButton, List, ListItem, Tooltip, Typography } from "@mui/material";
import { useToDo } from "../contexts/context";
import ToDoItem from "./ToDoItem";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

const ToDoList = () => {
  const { toDoList, clearCompleted } = useToDo();

  return (
    <>
    <Box sx={{
      display:'flex',
      justifyContent:'space-around',
      alignItems:'center',
      gap:2 

    }}>

      <Typography align="center" variant="h6">
        Task Items
      </Typography>
     <Tooltip title="Clear Completed Tasks">
      <IconButton onClick={clearCompleted} color="secondary">
        <CleaningServicesIcon sx={{ color: "#1976d2" }}/>
      </IconButton>
    </Tooltip>
                </Box>
      <Box
        sx={{
          width: "100%",
          maxHeight: "200px",
          overflowY: "auto",
          border: `1px solid blue`,
          borderRadius: "5px",
          padding: 2,
          backgroundColor: "gray",
          color: "white",
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
