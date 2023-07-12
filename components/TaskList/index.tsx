import React from "react";
import {
  faClipboardList,
  faClipboardCheck,
  faListCheck,
  faEye,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import "./styles.css";

//<FontAwesomeIcon icon={faEllipsisVertical} />

const statusValue = ["To Do", "In Progress", "Completed"];

const TaskList = () => {
  const TaskStatusIcon = ({ status }: { status: String }) => {
    if (status == statusValue[0])
      return <FontAwesomeIcon icon={faClipboardList} className="icon" />;
    if (status == statusValue[1])
      return <FontAwesomeIcon icon={faListCheck} className="icon" />;
    if (status == statusValue[2])
      return <FontAwesomeIcon icon={faClipboardCheck} className="icon" />;
  };

  return (
    <div className="list">
      <div className="item">
        <h1>Task List</h1>
      </div>
      <div className="item hover:bg-blue-500">
        <div className="item-icon">
          <TaskStatusIcon status="To Do" />
        </div>
        <div className="item-detail">
          <p>Title</p>
          <p>Description</p>
          <p>Status</p>
        </div>
        <div className="item-control">
          <Link href="/task/34/view">
            <FontAwesomeIcon icon={faEye} className="icon" />
          </Link>

          <Link href="/task/34/edit">
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="icon"
            />
          </Link>

          <FontAwesomeIcon
            icon={faTrashCan}
            className="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default TaskList;
