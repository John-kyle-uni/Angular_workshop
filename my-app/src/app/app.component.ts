import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {AccountsComponent} from '../accounts/accounts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,AccountsComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
