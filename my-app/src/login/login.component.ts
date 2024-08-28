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

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  // Hardcoded users
  users = [
    { username: 'admin', password: '12345' },
    { username: 'user', password: 'user1' },
    { username: 'group', password: 'group1' }
  ];

  constructor(private router: Router) {}

  login() {
    const user = this.users.find(u => u.username === this.username && u.password === this.password);

    if (user) {
      this.router.navigate(['/accounts']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
