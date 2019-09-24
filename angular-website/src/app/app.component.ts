import { Component } from '@angular/core';
import { FirebaseAuthService } from './providers/firebase-auth.service';

// Authentification 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-website';
  user = { login: "", password: "" };

  constructor(private firebaseAuth: FirebaseAuthService) {
  }
  submitForm() {
    console.log("Zoubida")
    this.firebaseAuth.SignUp(this.user.login, this.user.password);
  }
}
