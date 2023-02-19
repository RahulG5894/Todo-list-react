import { useState } from "react";
import Form from "./component/Form";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <Form
        input={input}
        setInput={setInput}
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
}
