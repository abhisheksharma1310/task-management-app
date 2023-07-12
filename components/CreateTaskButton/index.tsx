"use client"

import Link from 'next/link';

import './styles.css';

const CreateTask = () => {
  return (
    <Link href="/task" className="new-task-button">
      <p className="text-xl">+</p>
      <p>Create new task</p>
    </Link>
  );
};

export default CreateTask;
