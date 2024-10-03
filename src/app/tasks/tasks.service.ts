import { Injectable } from '@angular/core';
import { NewTask } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Angular',
      summary: 'Blabla',
      dueDate: '2025-12-07',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'React',
      summary: 'A JavaScript library for building user interfaces.',
      dueDate: '2024-11-15',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Vue.js',
      summary: 'The Progressive JavaScript Framework.',
      dueDate: '2024-10-25',
    },
    {
      id: 't4',
      userId: 'u3',
      title: 'Svelte',
      summary: 'Cybernetically enhanced web apps.',
      dueDate: '2024-12-01',
    },
  ];

  // LocalStorage（バックエンドからの内容と仮定）にある場合は、それをTaskオブジェトクとして使う。
  constructor() {
    const tasks = localStorage.getItem(`tasks`);
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(newTaskData: NewTask, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(), //仮に設定。ベストではない。
      userId: userId,
      title: newTaskData.title,
      summary: newTaskData.summary,
      dueDate: newTaskData.date,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
