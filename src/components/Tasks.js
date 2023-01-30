import Task from "./Task";

const Tasks = ({ taskaArray, deleteTask, reminder }) => {
  return (
    <>
      {taskaArray.map((item) => (
        <Task
          task={item}
          key={item.id}
          deleteTask={deleteTask}
          reminder={reminder}
        />
      ))}
    </>
  );
};

export default Tasks;
