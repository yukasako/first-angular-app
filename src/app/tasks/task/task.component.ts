import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {}
