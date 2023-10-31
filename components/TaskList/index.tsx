"use client";

import React, { useContext, useMemo, useState } from "react";
import {
  faEllipsisVertical,
  faEye,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { observer } from "mobx-react";
import { TaskStoreContext } from "@/models/TaskStore";
import DeleteDialog from "@/components/Dialog/DeleteDialog";
import TaskActionDialog from "@/components/Dialog/TaskActioDialog";

import "./styles.css";
import TaskStatusIcon from "../TaskStatusIcon";

const statusValue = ["To Do", "In Progress", "Completed"];

const TaskList = () => {
  const taskList = useContext(TaskStoreContext);

  const [filterBy, setFilterBy] = useState("auto");

  const filterTasks = useMemo(() => {
    if (filterBy === "auto") return taskList?.tasks;
    const tasks = taskList?.tasks?.filter((task) => task?.status === filterBy);
    return tasks;
  }, [filterBy, taskList]);

  return (
    <div className="task-list" suppressHydrationWarning={true}>
      <div className="item">
        <h1>Task List</h1>
        <div className="filetr-by">
          <label>Filter By</label>
          <select
            className="bg-black"
            defaultValue="Auto"
            onChange={(e) => setFilterBy(e.target?.value)}
            title="Filter tasks by its status"
          >
            <option value="auto">Auto</option>
            {statusValue.map((value, ind) => (
              <option key={ind} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>
      {taskList?.tasks[0]?.title == undefined && (
        <h2 className="text-center p-4">No task found. Add new one.</h2>
      )}
      <div className="list-items">
        {filterTasks?.map((task) => {
          return <TaskItem key={task?.id} task={task} />;
        })}
      </div>
    </div>
  );
};

const TaskItem = ({ task }: any) => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <div className="item hover:bg-blue-500">
      <div className="item-icon">
        <TaskStatusIcon status={task?.status} />
      </div>
      <div className="item-detail truncate">
        <p>Title: {task?.title}</p>
        <p className="truncate">Description: {task?.description}</p>
        <p>Status: {task?.status}</p>
      </div>
      <div className="item-control">
        <Link href={`/task/${task?.id}/view`}>
          <FontAwesomeIcon icon={faEye} className="icon" />
        </Link>
        <Link href={`/task/${task?.id}/edit`}>
          <FontAwesomeIcon icon={faPenToSquare} className="icon" />
        </Link>
        <FontAwesomeIcon
          icon={faTrashCan}
          className="icon"
          onClick={() => setOpen(true)}
        />
        {open && <DeleteDialog open={open} setOpen={setOpen} id={task?.id} />}
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          className="icon-m"
          onClick={() => setMenu(true)}
        />
        {menu && (
          <TaskActionDialog open={menu} setOpen={setMenu} id={task?.id} />
        )}
      </div>
    </div>
  );
};

export default observer(TaskList);
