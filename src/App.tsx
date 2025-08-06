import { CssBaseline } from "@mui/material";
import ToDo from "./pages/ToDo";
import "./App.css";
import ToDoProvider from "./providers/ToDoProvider";

function App() {
  return (
    <>
      <CssBaseline />
      <ToDoProvider>
        <ToDo />
      </ToDoProvider>
    </>
  );
}

export default App;
