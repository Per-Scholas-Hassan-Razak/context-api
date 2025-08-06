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
  editToDO: (id: string | number) => void;
  clearCompleted: () => void;
}
