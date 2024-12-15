import React, { useState } from "react";

export default function CreateTask(props) {
  const [task, setTask] = useState("");
  // const [priority, setPriority] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() === "") {
      alert("Полу ек можу бути порожнім");
      return;
    }
    if (task.length > 70) {
      alert("Полк ек можу бути більше 70 символів");
      return;
    }
    if (task.length < 5) {
      alert("Полк ек можу бути менше 5 символів");
      return;
    }
    props.addTask(task);
    setTask("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setTask(event.target.value)}
          value={task}
          type="text"
          placeholder="Створи своє завдання"
        />
        {/* <select value={priority}>
          <option value="нескафе голд">неособливо</option>
          <option value="арабіка">просте</option>
          <option value="ліберіка">важливо</option>
        </select> */}
        <button type="submit" className="btn">
          +
        </button>
      </form>
    </div>
  );
}
