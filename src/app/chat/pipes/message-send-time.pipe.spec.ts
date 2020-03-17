import { DatePipe } from '@angular/common';
import { MessageSendTimePipe } from './message-send-time.pipe';

describe('MessageSendTimePipe', () => {

  it('create an instance', () => {
    const pipe = new MessageSendTimePipe(new DatePipe('1234'));
    expect(pipe).toBeTruthy();
  });
});
