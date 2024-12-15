import React from "react";

export default function TaskList(props) {
  return (
    <ul className="list">
      {props.list.map((task) => (
        <li className="task" key={task.id}>
          <p
            onClick={() => props.completeTask(task.id)}
            className={task.isComplete ? "complete" : "text"}
          >
            {/* {task.priority === "додаткова" && <span>🎄</span>} */}
            {task.text}
          </p>
          <button
            onClick={() => props.deleteTask(task.id)}
            className="btn"
            type="button"
          >
            -
          </button>
        </li>
      ))}
    </ul>
  );
}
