import { Component } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = {
    email: '',
    password: '',
  }

  constructor(private _auth:AuthService,private _router:Router) {}

  login(theUser: User) {
    this._auth.login(theUser).subscribe(data => {
      console.log(data);
      this._router.navigate(['/dashboard']);
      localStorage.setItem('user', JSON.stringify(data));
    })
  }

}
