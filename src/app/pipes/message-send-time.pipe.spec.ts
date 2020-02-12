import { MessageSendTimePipe } from './message-send-time.pipe';

describe('MessageSendTimePipe', () => {
  it('create an instance', () => {
    const pipe = new MessageSendTimePipe();
    expect(pipe).toBeTruthy();
  });
});
