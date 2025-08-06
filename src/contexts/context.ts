import { createContext, useContext} from "react";
import type { ToDoContextProps } from "../types";

export const ToDoContext = createContext<ToDoContextProps | undefined>(undefined)
export const useToDo = () => {
    const context = useContext(ToDoContext)
    if(!context){
        throw new Error('useToDo must be used within a ToDoProvider')
    }
    return context;

}
