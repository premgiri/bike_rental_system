import { Component } from '@angular/core';

@Component({
  selector: 'app-current-bookings',
  templateUrl: './current-bookings.component.html',
  styleUrls: ['./current-bookings.component.scss']
})
export class CurrentBookingsComponent {
  isVisible = false;
  isViewBikeDetails:boolean = false;
  
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
}
