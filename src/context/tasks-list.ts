import { createContext, useContext } from "react";

declare interface ListContextProps {
    tasksList:any;
    addNewTask:(task:any)=>void;
    deleteTask:(id:any)=>void;
    editTaskStatus:(id:any)=>void;
}
export const ListContext = createContext<ListContextProps>({
    tasksList:[],
    addNewTask:(task)=>undefined,
    deleteTask:(id)=>undefined,
    editTaskStatus:(id)=>undefined,
});
export const useListContext = () => useContext(ListContext);
