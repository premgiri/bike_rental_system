import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LoginService } from './services/login.service';
import { NgxPermissionsService } from 'ngx-permissions';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  isShowForgotPassword:boolean = false;
  isCheckedShowPassword:boolean = false;
  loginForm!: FormGroup;
  constructor(private fb:FormBuilder, private loginService:LoginService, private ngxPermission :NgxPermissionsService, private router:Router, private message:NzMessageService){
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
    }
    console.log(payload);
    this.loginService.userLogin(payload).subscribe((response:any)=>{
      console.log(response);
      if(response.access_token){
        const roles:any = [];
        roles.push(response.role);
        localStorage.setItem('access-token',response.access_token);
        response.role;
        localStorage.setItem('roles',JSON.stringify(roles));
        const localRoles = JSON.parse(localStorage.getItem('roles') || '[]');
  
        // Load the permissions array using ngxPermissionsService
        this.ngxPermission.loadPermissions(localRoles);
        if(response.role === 'Admin'){
          this.router.navigate(['/admin-dashboard']);
        }
        if(response.role === 'Bike Owner'){
          this.router.navigate(['/bike-owner-dashboard']);
        }
        if(response.role === 'User'){
          this.router.navigate(['/user-dashboard']);
        }
        // if(){}
        console.log(roles);
      }else{
        this.message.error(response.errorMessage);
      }
    })
  }
  onSubmitForgotPassword(){
    
  }
}
