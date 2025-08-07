export interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}

export interface ToDoContextProps {
  toDoList: ToDo[];
  addToDo: (text:string) => void;
  toggleToDo: (id: string | number) => void;
  deleteToDo: (id: string | number) => void;
  editToDo: (id: string | number,newText: string) => void;
  clearCompleted: () => void;
  editingItem:ToDo | null;
  startEditing:(item:ToDo) => void
}

export type FilterType = "all" | "active" | "completed";

export interface FilterContextProps{
    filter: FilterType
    setFilter:(filter: "all" | "active" | "completed") => void
}
