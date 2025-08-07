import { Box, Button } from "@mui/material";

const Filter = () => {
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
        <Button variant="outlined">All</Button>
        <Button variant="outlined">Active</Button>
        <Button variant="outlined">Completed</Button>
        
      </Box>
    </>
  );
};

export default Filter;
