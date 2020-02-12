import { Action, createReducer, on } from '@ngrx/store';
import { cloneDeep } from 'lodash-es';

import * as UsersActions from './users.actions';
import { UsersData } from '../../models/users-data';


const initialState: UsersData = {
  users: [],
  selectedUser: null,
};

const usersReducer = createReducer(
  initialState,
  on(UsersActions.setUsers, (state, props) => {
    const newState = cloneDeep(state);
    newState.users = props.users;
    return newState;
  }),
  on(UsersActions.selectUser, (state, props) => {
    const newState = cloneDeep(state);
    newState.selectedUser = props.id;
    return newState;
  })
);

export function UsersReducer(state: UsersData, action: Action) {
  return usersReducer(state, action);
}
