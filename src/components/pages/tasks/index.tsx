import { useState } from 'react'
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

import { useListContext } from "../../../context/tasks-list";

import "./index.scss";

const Tasks = () => {
  const {
    tasksList,
    addNewTask,
    deleteTask,
    editTaskStatus,
  } = useListContext();

  const [newtask,setTask]=useState({
      name:'',
      description:'',
      isCompleted:false
  })

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {name,value}=e.target
      setTask({...newtask,[name]:value})
  };
  return (
    <div className="task-container">
      <h2>Liste des taches</h2>
      <ListGroup type="inline">
        {tasksList.map((task: any,index:number) => (
          <ListGroupItem key={index}>
            <div className="task-info">
              <span className="bolder">{task.name}</span>
              <span>{`: ${task.description} -`}</span>
              <span className="delete" onClick={() => deleteTask(task.id)}>
                supprimer
              </span>
            </div>
            <Badge
              onClick={() => editTaskStatus(task.id)}
              pill
              color={!task.isCompleted ? "danger" : "success"}
            >
              {!task.isCompleted && "non "}complété
            </Badge>
          </ListGroupItem>
        ))}
      </ListGroup>
      <h2>Créer une nouvelle tache</h2>
      <div className="add-task-form">
        <div className="form-group">
          <label>Nom de la tache</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            onChange={handleChangeInput}
            name="name"
            value={newtask.name}
          />
        </div>
        <div className="form-group">
          <label>Description de la tache en une ligne</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            onChange={handleChangeInput}
            name="description"
            value={newtask.description}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={() => {
            addNewTask(newtask);
            setTask({ ...newtask, description: "", name: "" });
          }}
        >
          Ajouter la tache
        </button>
      </div>
    </div>
  );
};
export default Tasks;
