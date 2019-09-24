import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() { }

  submitFacebook(){
    console.log('testing facebook');
    this.authService.FacebookAuth();
  }

}
