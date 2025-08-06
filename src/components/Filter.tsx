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
        <Button variant="contained">All</Button>
        <Button variant="contained">Active</Button>
        <Button variant="contained">Completed</Button>
      </Box>
    </>
  );
};

export default Filter;
