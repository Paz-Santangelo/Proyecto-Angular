import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-modalLogin',
  templateUrl: './modalLogin.component.html',
  styleUrls: ['./modalLogin.component.css']
})
export class ModalLoginComponent implements OnInit {

  camposLogin = {
    email : '',
    password : '',
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin() {
    //console.log(this.camposLogin);
    this.authService.login(this.camposLogin);
  }

}
