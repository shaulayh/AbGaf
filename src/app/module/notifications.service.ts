import {Injectable} from '@angular/core';
import {NotificationsService as Ng2NotificationsService} from 'angular2-notifications';

@Injectable()
export class NotificationsService {

  public notificationsConfig = {
    position: ['top', 'right'],
    timeOut: 4000,
    lastOnBottom: true,
    preventLastDuplicates: true,
    showProgressBar: false
  };

  constructor(private ng2NotificationsService: Ng2NotificationsService) {
  }

  success(msg: string, title?: string) {
    this.ng2NotificationsService.success(title || 'Success', msg);
  }

  error(msg: string, title?: string) {
    this.ng2NotificationsService.error(title || 'Error', msg);
  }

  warning(msg: string, title?: string) {
    this.ng2NotificationsService.warn(title || 'Warning', msg);
  }

  info(msg: string, title?: string) {
    this.ng2NotificationsService.info(title || 'Info', msg);
  }
}
