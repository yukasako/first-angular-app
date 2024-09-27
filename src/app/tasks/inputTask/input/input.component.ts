import { Component, Input, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../task/task.model';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input({ required: true }) userId!: string;

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService);

  // cancelというイベントを作成。
  @Output() close = new EventEmitter<void>();
  onCancel() {
    //　cancelというイベントを親へ発している。
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId,
    );
    this.close.emit();
  }
}
