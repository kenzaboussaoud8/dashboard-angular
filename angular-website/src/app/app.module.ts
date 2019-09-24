import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { rootRouterConfig } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { RegisterComponent } from './@pages/register/register.component';
import { FirebaseAuthService } from './providers/firebase-auth.service';
import { SigninComponent } from './signin/signin.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment),
    rootRouterConfig,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [
    FirebaseAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
