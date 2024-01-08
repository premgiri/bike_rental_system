import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  isShowForgotPassword:boolean = false;
  isCheckedShowPassword:boolean = false;
  loginForm!: FormGroup;
  constructor(private fb:FormBuilder, private loginService:LoginService){
    this.loginForm = this.fb.group({
      email:new FormControl(''),
      password:new FormControl('')
    })
  }
  ngOnInit(){
    
  }
  onLogin(){
    const payload = {
      email:this.loginForm.value.email,
      password:this.loginForm.value.password,
      returnSecureToken:true
    }
    this.loginService.loginwithFirebase(payload).subscribe((response:any)=>{
      console.log(response);
    })
  }
  onSubmitForgotPassword(){
    
  }
}
