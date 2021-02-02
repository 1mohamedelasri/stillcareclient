import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {MessageType} from '../models/MessageType';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  showToast( toastrService: ToastrService , type: MessageType, message: string, title: string): void {
    switch (type) {
      case MessageType.SUCCESS:
        toastrService.success(message, title);
        break;
      case MessageType.ERROR:
        toastrService.error(message, title);
        break;
      case MessageType.WARNING:
        toastrService.warning(message, title);
        break;
      case MessageType.INFO:
        toastrService.info(message, title);
        break;
    }
  }


  }
