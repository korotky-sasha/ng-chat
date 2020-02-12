export interface Message {
  id: number;
  author: number;
  isRead: boolean;
  sendAt: Date;
  text: string[];
}

export interface Thread {
  id: number;
  name: string;
  messages: Message[];
  selectedMessageId: number;
}

export interface ThreadsData {
  threads: Thread[];
  selectedThread: number;
}
