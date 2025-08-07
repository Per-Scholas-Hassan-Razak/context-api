import { useEffect, useState, type ReactNode } from "react";
import { ToDoContext } from "../contexts/context";
import type { ToDo } from "../types";

const ToDoProvider = ({ children }: { children: ReactNode }) => {
  const [toDoList, setToDoList] = useState<ToDo[]>(() => {
  const saved = localStorage.getItem('toDoList');
  return saved ? JSON.parse(saved) : [];
});
  

  useEffect(() => {
    localStorage.setItem('toDoList',JSON.stringify(toDoList))
  },[toDoList])

  const addToDo = (text:string) => {
    const newItem = {
        id:toDoList.length + 1,
        text,
        completed:false
    }
    setToDoList((prevToDoList) => [newItem, ...prevToDoList])

  };
  const toggleToDo = (id: string | number) => {
    setToDoList((prevToDo) =>
      prevToDo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };
  const deleteToDo = () => {};
  const editToDO = () => {};
  const clearCompleted = () => {};

  return (
    <ToDoContext.Provider
      value={{ toDoList,addToDo, toggleToDo, deleteToDo, editToDO, clearCompleted }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;
