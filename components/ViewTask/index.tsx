import React from "react";
import Link from "next/link";

import "./styles.css";

const ViewTask = () => {
  return (
    <div className="task-view">
      <header>
        <h1>Task Details</h1>
      </header>
      <div className="task-details">
        <p>Task Title</p>
        <p></p>
        <br />
        <p>Task Description</p>
        <p></p>
        <br />
        <p>Task Status</p>
        <p></p>
      </div>
      <div className="task-button-container">
        <Link href="/">
          <button className="task-buttons" type="button">
            Go to task list
          </button>
        </Link>
        <Link href="/task/87/edit">
          <button className="task-buttons" type="button">
            Update the task
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ViewTask;
