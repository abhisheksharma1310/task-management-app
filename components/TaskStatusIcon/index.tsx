import React from "react";
import {
  faClipboardList,
  faClipboardCheck,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.css";

const statusValue = ["To Do", "In Progress", "Completed"];

const TaskStatusIcon = ({ status }: { status: String }) => {
  if (status == statusValue[0])
    return <FontAwesomeIcon icon={faClipboardList} className="status-icon" />;
  if (status == statusValue[1])
    return <FontAwesomeIcon icon={faListCheck} className="status-icon" />;
  if (status == statusValue[2])
    return <FontAwesomeIcon icon={faClipboardCheck} className="status-icon" />;
};

export default TaskStatusIcon;
