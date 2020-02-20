import { UsersData } from './users-data';
import { ThreadsData } from './threads-data';

export interface ChatState {
  users: UsersData;
  threadsData: ThreadsData;
}

// something like this should be stored on mock backend

interface NewMessage {
  id: number;
  isRead: boolean;
}

interface NewThread {
  id: number;
  messages: NewMessage[];
}

interface NewUser {
  id: number;
  name: string;
  threads: NewThread[];
}

interface NewUsersData {
  users: NewUser[];
  selectedUser: number;
}

interface NewChatState {
  users: NewUsersData;
  threadsData: ThreadsData;
}
