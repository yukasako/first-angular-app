import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //  @Input(デコレーター)による親から子へのデータ移動
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  //  @Output(デコレーター)による子から親へのデータ移動
  @Output() select = new EventEmitter();

  /// getは、クラスのプロパティを取得する際に使うメソッドです。 ///
  get imagePath() {
    return `assets/users/` + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
