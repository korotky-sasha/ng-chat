import { UsersData } from './users-data';
import { ThreadsData } from './threads-data';

export interface ChatState {
  users: UsersData;
  threadsData: ThreadsData;
}

// something like this should be stored on backend

interface NewMessage {
  id: number;
  isRead: boolean;
}

interface UserThread {
  id: number;
  messages: NewMessage[];
  draft: string[]; // maybe just on client side
}

interface NewUser {
  id: number;
  name: string;
  threads: UserThread[];
}

interface NewUsersData {
  users: NewUser[];
  onlineUsers: number[];
}

interface NewChatState {
  users: NewUsersData;
  threadsData: ThreadsData;
}
