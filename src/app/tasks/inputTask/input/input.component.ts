import { Component, Input, EventEmitter, Output } from '@angular/core';
import { TasksComponent } from '../../tasks.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [TasksComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input({ required: true }) isAddingTask!: boolean;
  @Output() close = new EventEmitter();

  closeTask() {
    this.close.emit(this.isAddingTask);
    console.log(this.isAddingTask);
  }
}
