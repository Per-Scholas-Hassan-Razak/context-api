import { createContext, useContext } from "react";
import type { FilterContextProps, ToDoContextProps } from "../types";

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
