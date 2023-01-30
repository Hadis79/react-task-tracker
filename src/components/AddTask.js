import { useState } from "react";
const AddTask = ({ addNewTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);


  const createTask = (e) => {
    e.preventDefault();
    
    addNewTask({text,day,reminder});
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={createTask}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="add Task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="add Day & Time..."
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>{" "}
      <div className="form-control form-control-check">
        <label>set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
        />
      </div>
      <input type="submit" value="save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
