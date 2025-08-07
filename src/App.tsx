import ToDo from "./pages/ToDo";
import "./App.css";
import ToDoProvider from "./providers/ToDoProvider";
import { useTheme } from "./contexts/context";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { IconButton} from "@mui/material";

function App() {

    const {theme, toggleTheme} = useTheme()
  return (
    <>
      <ToDoProvider>
         <IconButton onClick={toggleTheme} color="inherit">
            {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        <ToDo />
      </ToDoProvider>
    </>
  );
}

export default App;
