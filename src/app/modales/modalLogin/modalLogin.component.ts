import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-modalLogin',
  templateUrl: './modalLogin.component.html',
  styleUrls: ['./modalLogin.component.css']
})
export class ModalLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.email, Validators.required]],
      password:['', [Validators.required]]
    })
   }

  ngOnInit() {
  }

  get Mail(){
    return this.loginForm.get("email");
  }
  
  get Password(){
    return this.loginForm.get("password");
  }

  onLogin() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value);
  }

}
