import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    username:string ='';
    birthdate:string ='';
    age:string ='';
    email:string ='';
    password:string ='';
    valid:boolean = false;

  // Hardcoded users
  users = [
    { username: 'admin',birthdate: '27 november 2000',age: '23',email:'admin@email.com', password: '12345',valid: Boolean},
    { username: 'user',birthdate: '27 march 2000',age: '24',email:'user@email.com', password: 'user1' ,valid: Boolean},
    { username: 'group',birthdate: '27 may 2002',age: '21',email:'group@email.com', password: 'group1',valid: Boolean}
  ];



  constructor(private router: Router, private httpClient:HttpClient ) {}

  login() {
    
    const user = this.users.find(u => u.username === this.username && u.password === this.password && u.birthdate === this.birthdate && u.age === this.age && u.email === this.email );

    if (user) {
      this.router.navigate(['/accounts']);
      sessionStorage.setItem ('username', this.username)
      sessionStorage.setItem ('birthdate', this.birthdate)
      sessionStorage.setItem ('age', this.age)
      sessionStorage.setItem ('email', this.email)
      this.valid = true
    } else {
      console.log('Invalid username or password');
    }
  }
}
// export class Users {
//   username:string ='';
//   birthdate:string ='';
//   age:number | undefined;
//   email:string ='';
//   password:string ='';
//   valid:boolean = false;

//   users = [
//     { username: 'admin',birthdate: '27 november 2000',age: 23,email:'admin@email.com', password: '12345',valid: Boolean},
//     { username: 'user',birthdate: '27 march 2000',age: 24,email:'user@email.com', password: 'user1' ,valid: Boolean},
//     { username: 'group',birthdate: '27 may 2002',age: 21,email:'group@email.com', password: 'group1',valid: Boolean}
//   ];

//   constructor(private router: Router) {}

//   login1() {
//     const user = this.users.find(u => u.username === this.username && u.password === this.password);

//     if (user) {
//       this.router.navigate(['/accounts']);
//     } else {
//       console.log('Invalid username or password');
//     }
//   }


// }
