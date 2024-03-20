import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { BikeOwnerService } from '../../services/bike-owner.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-bike',
  templateUrl: './add-bike.component.html',
  styleUrls: ['./add-bike.component.scss']
})
export class AddBikeComponent implements OnInit{
  public current = 0;
  public imageFileList: NzUploadFile[] = [];
  private uploadedImageFile:any;

  addBikeForm:FormGroup = new FormGroup({});
  constructor(private fb:FormBuilder, private bikeOwnerService: BikeOwnerService, private message: NzMessageService, protected activatedRoute: ActivatedRoute,){
    this.addBikeForm = this.fb.group({
      vehicleName: new FormControl(''),
      hirePricePerDay: new FormControl(''),
      vehicleNummber: new FormControl(''),
      modelName: new FormControl(''),
      address1: new FormControl(''),
      address2: new FormControl(''),
      country: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      zipCode: new FormControl('')
    })
  }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data:any)=>{
      console.log(data.bikeDetails);
      if(data.bikeDetails){
        this.updateBike(data.bikeDetails);
      }
    })
  }
  updateBike(bikeDetails:any){
    this.addBikeForm.patchValue({
      vehicleName:bikeDetails.bike_details.name,
      hirePricePerDay: bikeDetails.bike_details.fare_per_day,
      vehicleNummber: bikeDetails.bike_details.registration_number,
      modelName: bikeDetails.bike_details.model,
      address1: bikeDetails.bike_details.addressline1,
      address2: bikeDetails.bike_details.addressline2,
      country: bikeDetails.bike_details.country,
      state: bikeDetails.bike_details.state,
      city: bikeDetails.bike_details.city,
      zipCode: bikeDetails.bike_details.zipcode
    })

    if (bikeDetails.image) {
      // Decode the base64 string
      const binaryString = atob(bikeDetails.image);
      
      // Convert the binary string to an array buffer
      const buffer = new ArrayBuffer(binaryString.length);
      const bufferView = new Uint8Array(buffer);
      for (let i = 0; i < binaryString.length; i++) {
        bufferView[i] = binaryString.charCodeAt(i);
      }
  
      // Create a Blob object from the array buffer
      const blob = new Blob([buffer], { type: "image/png" });
  
      // Set Blob to uploadedImageFile for further use
      this.uploadedImageFile = blob;
  
      // Add Blob to imageFileList for display
      this.imageFileList = [];
      this.imageFileList.push({ uid: 'blob-' + this.imageFileList.length, name: 'Image', blob });
    }
}
  index = 'First-content';

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }
  beforeUploadImage = (file: NzUploadFile): boolean => {
    this.imageFileList = [];
    this.imageFileList = this.imageFileList.concat(file);
    // const formData = new FormData();
    this.imageFileList.forEach((file: any) => {
      this.uploadedImageFile = file;
    });
    return false;
  };

  onAddBike(): void {
    const form = this.addBikeForm.value;
    const formData = new FormData();
    const obj = {
      name: form.vehicleName,
      model: form.modelName,
      owner_id: Number(localStorage.getItem('id')),
      fare_per_day: Number(form.hirePricePerDay),
      registration_number: form.vehicleNummber,
      addressline1: form.address1,
      addressline2: form.address2,
      city: form.city,
      state: form.state,
      country: form.country,
      zipcode: form.zipCode
    }
    formData.append('obj',JSON.stringify(obj));
    formData.append('file',this.uploadedImageFile);
    this.bikeOwnerService.addBike(formData).subscribe((response:any)=>{
      if(response.message){
        this.message.success(response.message);
      }
    })
  }
}
