

import { types } from 'mobx-state-tree';

// Create an MST model for the Task
const TaskModel = types
  .model('Task', {
    title: types.string,
    description: types.string,
    status: types.string,
    id: types.string,
  })
  .actions((self) => ({
    updateTitle(newTitle: string) {
      self.title = newTitle;
    },
    updateDescription(newDescription: string) {
      self.description = newDescription;
    },
    updateStatus(newStatus: string) {
      self.status = newStatus;
    },
    updateId(newId: string) {
      self.id = newId;
    },
}));

export default TaskModel;
