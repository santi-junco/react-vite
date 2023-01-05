import { createContext } from "react";
import { useState, useEffect } from "react";
import { tareas as data } from "../components/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTarea] = useState([]);
	
	useEffect(() => {
    setTarea(data);
  }, []);

  function createTask(title, description) {
    setTarea([
      ...tasks,
      {
        id: tasks.length,
        title,
        description,
      },
    ]);
  }

  function deleteTarea(id) {
    setTarea(tasks.filter((task) => task.id !== id));
  }
  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTarea,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
