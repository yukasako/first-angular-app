import { Component, Input } from "@angular/core";
import { DUMMY_USERS } from '../../dymmy-users';

@Component({
    selector: 'app-tasks', //HTML内のelementの名前 
    standalone: true,
    templateUrl: `./task.component.html`, //HTML参照先
    styleUrl: `./task.component.css`,
  })
 
export class TaskComponent {
    @Input({required: true}) name!: string;

    get chosenName(){
        return this.name
    }
}