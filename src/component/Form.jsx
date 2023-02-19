import React, { useEffect } from "react";
import { v4 as uuidV4 } from "uuid";

export default function Form({
  input,
  setInput,
  tasks,
  setTasks,
  editTask,
  setEditTask,
}) {
  const updateTask = ({ title, id, completed }) => {
    const newTask = tasks.map((item) => {
      return item.id === id ? { title, id, completed } : item;
    });
    setTasks(newTask);
    setEditTask("");
  };
  useEffect(() => {
    editTask ? setInput(editTask.title) : setInput("");
  }, [editTask, setInput]);
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!editTask) {
      setTasks([...tasks, { id: uuidV4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTask(input, editTask.id, editTask.completed);
    }
  };
  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Enter your tasks... "
          value={input}
          onChange={onInputChange}
        />
        <button type="submit">{editTask ? "Ok" : "Add"}</button>
      </form>
    </>
  );
}
