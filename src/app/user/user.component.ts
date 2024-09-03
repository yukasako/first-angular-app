import { Component, computed, signal} from '@angular/core';
import { DUMMY_USERS } from '../dymmy-users';

const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Initialize Signal. このSignal（SelectedUser）が変更されたらUI変更。
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  sadDuck = "sadDuck.jpeg";
  // get imagePath(){
  //   return `assets/` + this.sadDuck
  // }
  //Signalを使う時はこのように書く。
  imagePath = computed(()=>`assets/` + this.sadDuck)

  onSelectUser(){
    const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)
    // クリックしたらSignal変更
    this.selectedUser.set(DUMMY_USERS[randomIndex])
  }
}
