import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../../dymmy-users';
import { TaskComponent } from './task/task.component';
import { InputComponent } from './inputTask/input/input.component';

@Component({
  selector: 'app-tasks', //HTML内のelementの名前
  standalone: true,
  templateUrl: `./tasks.component.html`, //HTML参照先
  styleUrl: `./tasks.component.css`,
  imports: [TaskComponent, InputComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  tasks = [
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

  addTask: boolean = false;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  toggleAddTask() {
    this.addTask = !this.addTask;
  }
}
