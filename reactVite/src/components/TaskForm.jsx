import { useContext } from "react";
import { useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setDescription("");
    setTitle("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-md">
        <h1 className="text-white font-bold text-2xl mb-3">Agregar Tarea</h1>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Tarea"
          value={title}
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          />
        <br />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Description"
          value={description}
        />
        <button className="bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-400 rounded-md">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
