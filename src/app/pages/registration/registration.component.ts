import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from './services/registration.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  registrationForm:FormGroup = new FormGroup({
    // Initialize form controls here
  });
  selectedValue = null;
  allRoles:any = [];
  isShowPassword:boolean = false;
  isShowConfirmPassword:boolean = false;
  constructor(private router:Router, private registrationService: RegistrationService, private fb:FormBuilder, private datePipe: DatePipe,private message:NzMessageService){
    this.registrationForm = new FormGroup({
      role:new FormControl(''),
      firstName:new FormControl(''),
      lastName:new FormControl(''),
      middleName:new FormControl(''),
      email:new FormControl(''),
      phoneNumber:new FormControl(''),
      alternatePhoneNumber:new FormControl(''),
      dob:new FormControl(''),
      gender:new FormControl(''),
      address1:new FormControl(''),
      address2:new FormControl(''),
      country:new FormControl(''),
      state:new FormControl(''),
      city:new FormControl(''),
      zipCode:new FormControl(''),
      password:new FormControl(''),
      confirmPassword:new FormControl(''),
    })
  }
  ngOnInit(): void {
      this.getAllRoles();
  }

  onCancelRegistration() {
    this.router.navigate(['']);
  }
  onSubmitUserVerification(){
    console.log(this.registrationForm);
    const form = this.registrationForm.value;
    console.log(form);
    const payload = { 
      "email": form.email,
      "password": form.password,
      "first_name": form.firstName,
      "middle_name": form.middleName,
      "last_name": form.lastName,
      "primary_phone_number": form.phoneNumber,
      "secondary_phone_number": form.alternatePhoneNumber,
      "dob": this.datePipe.transform(form.dob,'yyyy-MM-dd',),
      "role_id": form.role,
      "addressline1": form.address1,
      "addressline2": form.address2,
      "city": form.city,
      "state": form.state,
      "country": form.country,
      "zipcode": form.zipCode
    }
    console.log(payload);
    this.registrationService.register(payload).subscribe((response:any)=>{
      console.log(response);
      this.message.create('success','Successfully Registered');
      this.router.navigate(['']);
    })
  }

  getAllRoles(){
    this.registrationService.allRoles().subscribe((response:any)=>{
      this.allRoles = response.roles;
      console.log(response);
    })
  }

  toggleEyeIcon(){
    this.isShowPassword = !this.isShowPassword;
  }

  toggleConfirmEyeIcon(){
    this.isShowConfirmPassword = !this.isShowConfirmPassword;
  }
 
}
