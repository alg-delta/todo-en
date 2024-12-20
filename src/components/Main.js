import React from "react";
import CreateTask from "./CreateTask";
import { useState, useEffect } from "react";
import TaskList from "./TaskList";

export default function Main() {
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem("savedListEN")) ?? [];
  });
  const addTask = (task, priority) => {
    const newTask = {
      id: Math.floor(Math.random() * 9000) + 1000,
      text: task,
      isComplete: false,
      priority: priority,
    };
    setList([...list, newTask]);
  };

  const deleteTask = (id) => {
    // console.log("видалення", id);
    const newList = list.filter((task) => task.id !== id);
    setList(newList);
  };

  const completeTask = (id) => {
    // console.log("Завершене", id);
    const newList = list.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      } else {
        return task;
      }
    });
    setList(newList);
  };

  useEffect(() => {
    localStorage.setItem("savedListEN", JSON.stringify(list));
  }, [list]);

  return (
    <div className="main">
      <h3 className="title">Список задач</h3>
      <CreateTask addTask={addTask} />
      <TaskList
        list={list}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </div>
  );
}
