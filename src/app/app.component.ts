import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dymmy-users';

// import { HeaderComponent } from './header/header.component';
// import { UserComponent } from './user/user.component';
// import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  // Standaloneコンポーネントを使わずモジュール管理する場合
  standalone: false,
  // Standaloneコンポーネントを使う（false）場合
  // imports: [HeaderComponent, UserComponent, TasksComponent], // ここに挿入したいコンポーネントを記載
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  /// オブジェクトの宣言 ///
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
