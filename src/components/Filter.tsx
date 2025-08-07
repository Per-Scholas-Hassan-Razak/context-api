import { Box, Button } from "@mui/material";
import { useFilter } from "../contexts/context";

const Filter = () => {
  const { filter, setFilter } = useFilter();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          mt: 1,
          justifyContent: "center",
        }}
      >
        <Button 
          onClick={() => setFilter("all")} 
          variant={filter === 'all' ? "contained" : "outlined"} 
          >
          All
        </Button>
        <Button
          onClick={() => setFilter("active")}
          variant={filter === 'active' ? "contained" : "outlined"}
        >
          Active
        </Button>
        <Button
          onClick={() => setFilter("completed")}
          variant={filter === 'completed' ? "contained" : "outlined"}
        >
          Completed
        </Button>
      </Box>
    </>
  );
};

export default Filter;
