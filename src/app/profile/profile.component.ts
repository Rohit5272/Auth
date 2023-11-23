import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService,private _user: UserService) { }


  ngOnInit(): void {
     this._user.getUsers().subscribe(res => console.log(res));
  }

  logout() {
    this.authService.logout();
  }
}
