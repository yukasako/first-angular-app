import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  /// @Inputによるオブジェクトのプロパティの指定   
  @Input() avatar!: string;   
  @Input() name!: string;

  /// getは、クラスのプロパティを取得する際に使うメソッドです。 ///
  get imagePath(){
  return `assets/users/` + this.avatar
 }
  onSelectUser(){
  }
}
