import { useState } from "react";
import Form from "./component/Form";
import Todos from "./component/Todos";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <Form
        input={input}
        setInput={setInput}
        tasks={tasks}
        setTasks={setTasks}
        editTask={editTask}
        setEditTask={setEditTask}
      />
      <div>
        <Todos tasks={tasks} setTasks={setTasks} setEditTask={setEditTask} />
      </div>
    </div>
  );
}
