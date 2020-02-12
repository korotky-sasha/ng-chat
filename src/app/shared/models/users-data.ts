export interface User {
  id: number;
  name: string;
  avatarUrl: string;
}

export interface UsersData {
  users: User[];
  selectedUser: number;
}
