export default function Todos({ tasks, setTasks, setEditTask }) {
  const handleDelete = ({ id }) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };
  const handleComplete = (item) => {
    setTasks(
      tasks.map((todo) => {
        if (todo.id === item.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findTask = tasks.find((item) => (item.id = id));
    setEditTask(findTask);
  };
  return (
    <div>
      {tasks.map((item) => {
        return (
          <li key={item.id}>
            <input
              type="text"
              value={item.title}
              onChange={(e) => {
                e.preventDefault();
              }}
            />
            <button
              type="submit"
              onClick={() => {
                handleEdit(item);
              }}
            >
              Edit
            </button>
            <button type="submit" onClick={() => handleComplete(item)}>
              Complete
            </button>
            <button type="submit" onClick={() => handleDelete(item)}>
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
}
