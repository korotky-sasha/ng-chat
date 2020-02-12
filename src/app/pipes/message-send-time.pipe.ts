import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'messageSendTime'
})
export class MessageSendTimePipe implements PipeTransform {

  constructor(
    private datePipe: DatePipe
  ) {
  }

  transform(currentTime: Date, sendAt: Date): any {
    if (currentTime) {
      const timeDiff = currentTime.getTime() - sendAt.getTime();
      if (timeDiff < 60000) {
        return 'just now';
      } else if (timeDiff < 3600000) {
        const minutes = Math.floor(timeDiff / 60000);
        return minutes + ' minutes ago';
      } else if (timeDiff < 86400000) {
        const hours = Math.floor(timeDiff / 3600000);
        return hours + ' hours ago';
      } else {
        return this.datePipe.transform(sendAt, 'fullDate');
      }
    }
  }
}
