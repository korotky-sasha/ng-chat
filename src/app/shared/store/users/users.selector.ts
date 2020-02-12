import { createSelector } from '@ngrx/store';

import { ChatState } from '../../models/chat-state';

export const getUsers = (state: ChatState) => {
  return state.users;
};

export const getSelectedUser = createSelector(
  getUsers,
  (users) => {
    return users.users.find(user => {
      return user.id === users.selectedUser;
    });
  }
);

export const getUser = createSelector(
  getUsers,
  (users, props) => {
    return users.users.find(user => {
      return user.id === props.id;
    });
  }
);
