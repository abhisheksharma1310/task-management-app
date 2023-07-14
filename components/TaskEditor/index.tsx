"use client";

import { useState } from "react";
import Link from "next/link";

import "./styles.css";

type taskEditorProp = {
  edit: boolean;
};

const statusValue = ["To Do", "In Progress", "Completed"];

const TaskEditor = ({ edit = false }: taskEditorProp) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: statusValue[0],
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setTask((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(task);
  };

  const addNewTask = (e: any) => {
    e.preventDefault();
    console.log(task);
  };

  return (
    <>
      <form className="task-edit-area" onSubmit={addNewTask} method="post">
        <header>
          <h1>{edit ? "Edit task" : "Create new task"}</h1>
        </header>
        <fieldset className="task-field">
          <legend></legend>
          <input
            type="text"
            id="title"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Enter task title"
            required
            minLength={3}
            title="A brief title describing the task"
            className="bg-black border-0 outline-0"
          />
          <textarea
            name="description"
            value={task.description}
            placeholder="Enter task description"
            rows={10}
            onChange={handleChange}
            required
            minLength={10}
            title="Description: A detailed description of the task"
            className="bg-black border-0 outline-0"
          />
          <select
            name="status"
            id="status"
            title="Select task status"
            onChange={handleChange}
            required
            className="bg-black border-0 outline-0"
          >
            <option defaultValue={task.status} disabled>
              Choose task current status
            </option>
            {statusValue.map((status, index) => {
              return (
                <option key={index} value={status}>
                  {status}
                </option>
              );
            })}
          </select>
        </fieldset>
        <div className="task-edit-button-container">
          <Link href="/">
            <button className="task-edit-button" type="button">
              Go to task list
            </button>
          </Link>
          <button className="task-edit-button" type="submit">
            {edit ? "Update the task" : "Create new task"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TaskEditor;
