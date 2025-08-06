export interface ToDoItemProps{
    id:number;
    text:string;
    completed:boolean
}

export interface ToDoContextProps {
  addToDo: (text: string) => void;
  toggleToDo: (id: string | number) => void;
  deleteToDo: (id: string | number) => void;
  editToDO: (id: string | number) => void;
  clearCompleted: () => void;
}



