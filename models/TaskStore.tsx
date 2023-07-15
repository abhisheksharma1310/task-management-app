"use client"

import TaskListModel from "./TaskListModel";
import React, { createContext, FC } from 'react';
import { Instance } from 'mobx-state-tree';


// Create the TaskStore context
const TaskStoreContext = createContext<Instance<typeof TaskListModel> | null>(null);

// Create the TaskStore provider
interface TaskStoreProviderProps {
  children: React.ReactNode;
}

const TaskStoreProvider: FC<TaskStoreProviderProps> = ({ children }) => {
  const taskList = TaskListModel.create({ tasks: [] });

  return (
    <TaskStoreContext.Provider value={taskList}>
      {children}
    </TaskStoreContext.Provider>
  );
};

export { TaskStoreContext, TaskStoreProvider };