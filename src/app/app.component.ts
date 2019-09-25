import { CounterService } from './counter.service';
import { UsersService } from './users.service';
import { Component, OnInit, DoCheck} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  activeUsers: string[]
  inactiveUsers: string[]
  activeToInactive: number
  inactiveToActive: number
  

  constructor(private usersService: UsersService, private counterService: CounterService) {

  }

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  
  }

  ngDoCheck() {
    this.activeToInactive = this.counterService.activeToInactive;
    this.inactiveToActive = this.counterService.inactiveToActive;
  }
}
