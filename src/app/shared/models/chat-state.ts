import { UsersData } from './users-data';
import { ThreadsData } from './threads-data';

export interface ChatState {
  users: UsersData;
  threadsData: ThreadsData;
}
