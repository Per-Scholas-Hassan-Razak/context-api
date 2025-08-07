import { useEffect, useState, type ReactNode } from "react";
import { ToDoContext } from "../contexts/context";
import type { ToDo } from "../types";

const ToDoProvider = ({ children }: { children: ReactNode }) => {
  const [toDoList, setToDoList] = useState<ToDo[]>(() => {
    const saved = localStorage.getItem("toDoList");
    return saved ? JSON.parse(saved) : [];
  });
  const [editingItem, setEditingItem] = useState<ToDo | null>(null);

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);

  const addToDo = (text: string) => {
    const newItem = {
      id: toDoList.length + 1,
      text,
      completed: false,
    };
    setToDoList((prevToDoList) => [newItem, ...prevToDoList]);
  };

  const toggleToDo = (id: string | number) => {
    setToDoList((prevToDo) =>
      prevToDo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteToDo = (id: string | number) => {
    setToDoList((prevToDo) => prevToDo.filter((item) => item.id !== id));
    setEditingItem((prev) => (prev?.id === id ? null : prev));
  };

  const editToDo = (id: string | number, newText: string) => {
    setToDoList((prevToDo) =>
      prevToDo.map((item) =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
    setEditingItem(null);
  };

  const startEditing = (item: ToDo) => {
    setEditingItem(item);
  };

  const clearCompleted = () => {};

  return (
    <ToDoContext.Provider
      value={{
        toDoList,
        addToDo,
        toggleToDo,
        deleteToDo,
        editToDo,
        clearCompleted,
        startEditing,
        editingItem,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;
