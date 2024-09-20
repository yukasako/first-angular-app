import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //  @Input(デコレーター)による親から子へのデータ移動
  @Input({required: true}) id!: string;   
  @Input({required: true}) avatar!: string;   
  @Input({required: true}) name!: string;

  //  @Output(デコレーター)による子から親へのデータ移動
  @Output() select = new EventEmitter();

  /// getは、クラスのプロパティを取得する際に使うメソッドです。 ///
    get imagePath(){
    return `assets/users/` + this.avatar
  }
 
  onSelectUser(){
    this.select.emit(this.id);
  }
}
