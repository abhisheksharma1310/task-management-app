"use client"

import Link from 'next/link'

const CreateTask = () => {
  return (
    <Link href="/task" className="flex flex-col justify-center items-center w-72 h-24 border-2 border-dashed border-blue-700 cursor-pointer">
      <p className="text-xl">+</p>
      <p>Create new task</p>
    </Link>
  );
};

export default CreateTask;
