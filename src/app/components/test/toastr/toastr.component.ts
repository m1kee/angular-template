import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.css']
})
export class ToastrComponent {

  // default toast config
  toastr: any = {
    message: 'Amazing Title',
    title: 'Amazing Message',
    type: 'success',
    individualConfig: {
      closeButton: false,
      timeOut: 5000,
      extendedTimeOut: 1000,
      disableTimeOut: false,
      easing: 'ease-in',
      easeTime: 300,
      enableHtml: false,
      progressBar: false,
      progressAnimation: 'decreasing',
      toastClass: 'toast',
      positionClass: 'toast-top-right',
      titleClass: 'toast-title',
      messageClass: 'toast-message',
      tapToDismiss: true,
      onActivateTick: false
    }
  };

  constructor(private toastrService: ToastrService) { }

  createToastrMessage() {
    switch (this.toastr.type) {
      case 'success':
        this.toastrService.success(this.toastr.message, this.toastr.title, this.toastr.individualConfig);
        break;
      case 'error':
        this.toastrService.error(this.toastr.message, this.toastr.title, this.toastr.individualConfig);
        break;
      case 'info':
        this.toastrService.info(this.toastr.message, this.toastr.title, this.toastr.individualConfig);
        break;
      case 'warning':
        this.toastrService.warning(this.toastr.message, this.toastr.title, this.toastr.individualConfig);
        break;
      default:
        this.toastrService.error(this.toastr.message, this.toastr.title, this.toastr.individualConfig);
        break;
    }
  }

}
