"use client"

import React, {useContext, useState} from "react";
import {
  faEllipsisVertical,
  faEye,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { observer } from 'mobx-react';
import { TaskStoreContext } from '@/models/TaskStore';
import Dialog from "@/components/Dialog";

import "./styles.css";
import TaskStatusIcon from "../TaskStatusIcon";

const TaskList = () => {

  const taskList = useContext(TaskStoreContext);

  return (
    <div className="list" suppressHydrationWarning={true}>
      <div className="item">
        <h1>Task List</h1>
      </div>
      {taskList?.tasks[0]?.title == undefined && <h2 className="text-center p-4">No task found. Add new one.</h2>}
      {taskList?.tasks?.map((task) => {
        return <TaskItem key={task?.id} task={task} />
      })}
    </div>
  );
};

const TaskItem = ({task }: any) => {

  const [open, setOpen] = useState(false);

  return <div className="item hover:bg-blue-500">
  <div className="item-icon">
    <TaskStatusIcon status={task?.status} />
  </div>
  <div className="item-detail">
    <p>Title: {task?.title}</p>
    <p>Description: {task?.description}</p>
    <p>Status: {task?.status}</p>
  </div>
  <div className="item-control">
    <Link href={`/task/${task?.id}/view`}>
      <FontAwesomeIcon icon={faEye} className="icon" />
    </Link>
    <Link href={`/task/${task?.id}/edit`}>
      <FontAwesomeIcon icon={faPenToSquare} className="icon" />
    </Link>
    <FontAwesomeIcon icon={faTrashCan} className="icon" onClick={() => setOpen(true)}/>
    {open &&
      <Dialog open={open} setOpen={setOpen} id={task?.id}/>
    }
    <FontAwesomeIcon icon={faEllipsisVertical} className="icon-m"/>
  </div>
</div>
};

export default observer(TaskList);
