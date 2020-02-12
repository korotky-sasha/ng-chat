import { createAction, props } from '@ngrx/store';

import { User } from '../../models/users-data';

export const setUsers = createAction(
  '[AppComponent] Set Users',
  props<{users: User[]}>()
);

export const selectUser = createAction(
  '[AppComponent] Select User',
  props<{id: number}>()
);
