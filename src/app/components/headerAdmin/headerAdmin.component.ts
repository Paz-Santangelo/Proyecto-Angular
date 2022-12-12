import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-headerAdmin',
  templateUrl: './headerAdmin.component.html',
  styleUrls: ['./headerAdmin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  isLogged = false;

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  notLogged(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

}

/*
ngOnInit() {
    //this.isLoggedIn();
    //this.onLogout();
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  onLogout(){
    return this.authService.logout();
  }  
*/