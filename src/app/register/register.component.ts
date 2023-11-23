import { Component } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {
    name:'',
    email:'',
    password:''
  }
  submitted = false;

  constructor(private _auth:AuthService,private _router:Router) {}

  register(theUser) {
    this._auth.register(theUser).subscribe(data => {
      console.log(data);
      this.resetItems()
      this.submitted = true;
    },(err) => console.log(err))
  }

  resetItems() {
    this.user = {
      name:'',
      email:'',
      password:''
    }
  }

  newRegister() {
    this.submitted = false;
    this.user = {
      name:'',
      email:'',
      password:''
    }
  }

}
