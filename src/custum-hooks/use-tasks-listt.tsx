import {useState} from 'react';
import { ITask } from '../utils/interfaces';

export const useTasksList=()=>{
    const [tasksList, setTasksList] = useState<ITask[]>([
      {
        id: 0,
        name: "111",
        description: "111111",
        isCompleted: false,
      }
    ]);
    
    const addNewTask = (task: any) => {
      setTasksList([
        ...tasksList,
        {
          id: tasksList.length+1,
          name: task.name,
          description: task.description,
          isCompleted: false,
        },
      ]);
    };
    const deleteTask=(id:number)=>{
        const newTasksList=tasksList.filter((task:any)=>task.id!==id);
        setTasksList([...newTasksList])
    }
    const editTaskStatus=(id:number)=>{
        const taskListCopy=[...tasksList];
        const taskIndex = taskListCopy.findIndex(task=>task.id===id);
        taskListCopy[taskIndex].isCompleted=!taskListCopy[taskIndex].isCompleted;
        setTasksList([...taskListCopy])
    }
    return {
      tasksList,
      addNewTask,
      deleteTask,
      editTaskStatus,
    };
}