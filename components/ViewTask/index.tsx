"use client"

import React, {useContext, useEffect, useState } from "react";
import Link from "next/link";
import { TaskStoreContext } from '@/models/TaskStore';

import "./styles.css";

// Define the Task interface
interface ITask {
  title: string;
  description: string;
  status: string;
  id: string;
}

type propsType = {
  id: string,
}

const ViewTask = ({id}: propsType) => {

  const taskList = useContext(TaskStoreContext);

  const [task, setTask] = useState<ITask>({
    title: "",
    description: "",
    status: "",
    id: "",
  });

  useEffect(() => {
    const {...task} = taskList?.getTaskById(id);
    setTask(task);
  }, [id, taskList]);

  return (
    <div className="task-view">
      <header>
        <h1>Task Details</h1>
      </header>
      <div className="task-details">
        <p>Task Title</p>
        <p>{task.title}</p>
        <br />
        <p>Task Description</p>
        <p>{task.description}</p>
        <br />
        <p>Task Status</p>
        <p>{task.status}</p>
      </div>
      <div className="task-button-container">
        <Link href="/">
          <button className="task-buttons" type="button">
            Go to task list
          </button>
        </Link>
        <Link href={`/task/${task.id}/edit`}>
          <button className="task-buttons" type="button">
            Update the task
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ViewTask;
