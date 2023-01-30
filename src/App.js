import { useState,useEffect } from "react";
import Header from "./components/Layots/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [tasks, setTasks] = useState([]);
  const onDelete = (id) => {
    setTasks([...tasks].filter((item) => item.id !== id));
  };

 
  const onToggle = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: !task.reminder } : task;
      })
    );
  };
  const addNewTask = (task) => {
    const id = Math.random() * 10000 + 1;
    const newtask = { id, ...task };
    setTasks([...tasks, newtask]);
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd} />
      {showAdd ? <AddTask addNewTask={addNewTask} /> : ""}{" "}
      {tasks.length > 0 ? (
        <Tasks taskaArray={tasks} deleteTask={onDelete} reminder={onToggle} />
      ) : (
        "Nothing Exist to Show"
      )}{" "}
    </div>
  );
}

export default App;
