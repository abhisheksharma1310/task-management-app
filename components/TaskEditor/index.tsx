"use client";

import { useState } from "react";

type taskEditorProp = {
  edit: boolean
};

const statusValue = ["To Do", "In Progress", "Completed"];

const TaskEditor = ({edit = false}: taskEditorProp) => {
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
      <form className="flex flex-col justify-center items-center p-10" onSubmit={addNewTask} method="post">
        <fieldset className="flex flex-col border border-solid border-blue-700 p-4 w-3/4 h-3/4 gap-4">
          <legend>{edit ? "Edit task" : "Create new task"}</legend>
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
        <div className="flex justify-end items-end py-4 w-3/4">
          <button className="hover:bg-blue-700 cursor-pointer border border-solid border-blue-700 p-4" type="submit">
            {edit ? "Update the task" : "Create new task"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TaskEditor;
