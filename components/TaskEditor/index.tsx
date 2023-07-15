"use client";

import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';

import "./styles.css";
import { TaskStoreContext } from '@/models/TaskStore';

// Define the Task interface
interface ITask {
  title: string;
  description: string;
  status: string;
  id: string;
}

type taskEditorProp = {
  edit: boolean;
  id: string;
};

const statusValue = ["To Do", "In Progress", "Completed"];

const TaskEditor = ({ edit = false, id }: taskEditorProp) => {

  const taskList = useContext(TaskStoreContext);

  const [task, setTask] = useState<ITask>({
    title: "",
    description: "",
    status: statusValue[0],
    id: uuidv4(),
  });

  useEffect(() => {
    if(edit && id?.length > 10){
      const {...editTask} = taskList?.getTaskById(id);
      setTask(editTask);
    }
  }, [id, edit, taskList]);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setTask((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleTaskSubmit = (e: any) => {
    e.preventDefault();
    if(edit){
      taskList?.updateTask(task);
    } else {
      taskList?.addTask(task);
    }
  };

  return (
    <>
      <form className="task-edit-area" onSubmit={handleTaskSubmit} method="post">
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
            autoFocus
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
