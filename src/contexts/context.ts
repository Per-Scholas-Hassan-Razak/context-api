import { createContext, useContext } from "react";
import type {
  FilterContextProps,
  ThemeContextProps,
  ToDoContextProps,
} from "../types";

export const ToDoContext = createContext<ToDoContextProps | undefined>(
  undefined
);
export const useToDo = () => {
  const context = useContext(ToDoContext);
  if (!context) {
    throw new Error("useToDo must be used within a ToDoProvider");
  }
  return context;
};

export const FilterContext = createContext<FilterContextProps | undefined>(
  undefined
);
export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  return context;
};

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
