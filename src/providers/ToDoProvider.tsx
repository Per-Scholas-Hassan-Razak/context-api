import { type ReactNode } from "react";
import { ToDoContext } from "../contexts/context";



const ToDoProvider = ({ children }: { children: ReactNode }) => {

  const addToDo = () => {};
  const toggleToDo = () => {};
  const deleteToDo = () => {};
  const editToDO = () => {};
  const clearCompleted = () => {};

  return (
    <ToDoContext.Provider
      value={{ addToDo, toggleToDo, deleteToDo, editToDO, clearCompleted }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;
