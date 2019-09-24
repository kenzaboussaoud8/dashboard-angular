import { Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';


export const rootRouterConfig: Routes = [
  { path: 'register', component: SigninComponent }
];