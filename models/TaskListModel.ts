

import { types } from 'mobx-state-tree';
import TaskModel from './Task';

// Define the Task interface
interface ITask {
    title: string;
    description: string;
    status: string;
    id: string;
}

// Create an MST model for the TaskList
const TaskListModel = types
    .model('TaskList', {
        tasks: types.array(TaskModel),
    })
    .actions((self) => ({
        addTask(task: ITask) {
            self.tasks.push(task);
            saveToLocalStorage(self);
        },
        removeTask(id: String) {
            const index = self.tasks.findIndex((task) => task.id === id);
            if (index !== -1) {
                self.tasks.splice(index, 1);
            }
            saveToLocalStorage(self);
        },
        updateTask(updatedTask: ITask) {
            const index = self.tasks.findIndex((task) => task.id === updatedTask.id);
            if (index !== -1) {
                self.tasks[index] = updatedTask;
            }
            saveToLocalStorage(self);
        },
    }))
    .views((self) => ({
        loadFromLocalStorage() {
            if (typeof localStorage !== 'undefined') {
                const tasksJSON = localStorage.getItem('taskList');
                if (tasksJSON) {
                    self.tasks = JSON.parse(tasksJSON);
                }
            }
        },
        getTaskById(id: string) {
            return self.tasks.find((task) => task.id === id);
        },
    }))
    .actions((self) => ({
        afterCreate() {
            self.loadFromLocalStorage();
        },
    }));

function saveToLocalStorage(self: any) {
    if (typeof localStorage !== 'undefined') {
        const tasksJSON = JSON.stringify(self.tasks);
        localStorage.setItem('taskList', tasksJSON);
    }
}

// Create an instance of the TaskList model
// const taskList = TaskListModel.create({
//     tasks: []
// });

// Usage example:
// taskList.addTask({
//     title: 'Complete project assignment',
//     description: 'Build a task management application.',
//     status: 'To Do',
//     id: uuidv4(),
// });

export default TaskListModel;