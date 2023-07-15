"use client"

import TaskEditor from '@/components/TaskEditor'
import React from 'react'

const page = ({params}: any) => {
  const id = params.taskId;
  return (
    <TaskEditor edit={true} id={id}/>
  )
}

export default page