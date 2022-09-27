import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-modalLogin',
  templateUrl: './modalLogin.component.html',
  styleUrls: ['./modalLogin.component.css']
})
export class ModalLoginComponent implements OnInit {

  email = '';
  password = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin() {
    console.log(this.email, this.password);
    this.authService.login(this.email, this.password);
    
   
  }

}
