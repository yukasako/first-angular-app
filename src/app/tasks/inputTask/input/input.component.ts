import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // cancelというイベントを作成。
  @Output() cancel = new EventEmitter<void>();
  onCancel() {
    //　cancelというイベントを親へ発している。
    this.cancel.emit();
  }
}
