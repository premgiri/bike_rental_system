import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { ProfileDetailsService } from './services/profile-details.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit{
  loading = false;
  avatarUrl?: string;
  currentPasswordVisible = false;
  newPasswordVisible = false;
  confirmPasswordVisible = false;
  isVisible = false;
  public userDetails:any;
  private userId:any = localStorage.getItem('id');
  changePasswordForm:FormGroup = new FormGroup({});
  profileDetailsForm:FormGroup = new FormGroup({});
  constructor(private fb:FormBuilder, private profilesService: ProfileDetailsService, private message: NzMessageService, private router:Router){
    this.changePasswordForm = this.fb.group({
      currentPassword: new FormControl(''),
      newPassword: new FormControl(''),
      confirmPassword: new FormControl('')
    })
    this.profileDetailsForm = this.fb.group({
      id: Number(this.userId),
      first_name: new FormControl(""),
      middle_name: new FormControl(""),
      last_name: new FormControl(""),
      email_id: new FormControl(),
      primary_phone_number: new FormControl(""),
      secondary_phone_number: new FormControl(""),
      dob: new FormControl(""),
      addressline1: new FormControl(""),
      addressline2: new FormControl(""),
      country: new FormControl(""),
      state: new FormControl(""),
      city: new FormControl(""),
      zipcode: new FormControl(""),
    });
  }
  ngOnInit(): void {
    this.profilesService.getUserInfo(this.userId).subscribe((response:any)=>{
      this.userDetails = response;
      this.profileDetailsForm.patchValue(this.userDetails);
    })
  }
  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]): Observable<boolean> =>
    new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        // this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        // this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        // this.msg.error('Network error');
        this.loading = false;
        break;
    }
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  onChangePssword(){
    const form = this.changePasswordForm.value;
    const payload = {
      current_password:form.currentPassword,
      new_password:form.newPassword
    }
    this.profilesService.passwordChange(payload).subscribe((response:any)=>{
      if(response.message){
        localStorage.clear();
        this.router.navigate(['']);
        this.message.success(response.message);
      }
    })
  }
  onChangesProfileDetails(){
    this.profilesService.changeProfile(this.profileDetailsForm.value).subscribe((response:any)=>{
      this.message.success(response.message);
      console.log(response);
    })
  }
}
