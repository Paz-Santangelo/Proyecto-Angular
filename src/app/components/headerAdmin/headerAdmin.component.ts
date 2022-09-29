import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-headerAdmin',
  templateUrl: './headerAdmin.component.html',
  styleUrls: ['./headerAdmin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn();
    this.onLogout();
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  onLogout(){
    return this.authService.logout();
  }
}
