import { Routes } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {AccountsComponent} from '../accounts/accounts.component';
import {ProfileComponent} from '../profile/profile.component';

export const routes: Routes = [
    {path: 'login', component:LoginComponent},
    {path: 'accounts', component:AccountsComponent},
    {path: 'profile', component:ProfileComponent},

];
