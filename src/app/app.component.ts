import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../dymmy-users';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent], // ここに挿入したいコンポーネントを記載
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    /// オブジェクトの宣言 ///
    users = DUMMY_USERS
    selectedName = ""

    onSelectUser(id: string){
      console.log(id)
      const selectedUser = DUMMY_USERS.find(user => user.id === id)!
      this.selectedName = selectedUser.name
    }
}
