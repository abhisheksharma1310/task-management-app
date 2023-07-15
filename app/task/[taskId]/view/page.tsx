"use client"

import ViewTask from '@/components/ViewTask'
import React from 'react'

const page = ({params}: any) => {
  const id = params.taskId;
  return (
    <>
      <ViewTask id={id}/>
    </>
  )
}

export default page