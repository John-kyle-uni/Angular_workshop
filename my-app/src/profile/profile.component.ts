import { Component } from '@angular/core';
import exp from 'constants';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  
}
function getFromSessionStorage() {
  // const name1 = sessionStorage.getItem ('username');
  alert('hello');
}

