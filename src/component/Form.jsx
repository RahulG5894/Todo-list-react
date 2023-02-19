import React from "react";

export default function Form({ input, setInput, tasks, setTasks }) {
  return (
    <>
      <form>
        <input type="text" placeholder="Enter your tasks... " value={input} />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
