import { Component, Input } from '@angular/core';
// import { TaskComponent } from './task/task.component';
// import { InputComponent } from './inputTask/input/input.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks', //HTML内のelementの名前
  // standalone: true,
  templateUrl: `./tasks.component.html`, //HTML参照先
  styleUrl: `./tasks.component.css`,
  // imports: [TaskComponent, InputComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;

  // Dependency Injection (依存性注入)
  // コンストラクタ関数の中で依存関係を指定し、必要なパラメーターの型を明確に定義することで、
  // Angularは適切な型でインスタンス作成できる。
  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = !this.isAddingTask;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
