import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent], // ここに挿入したいコンポーネントを記載
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
}
