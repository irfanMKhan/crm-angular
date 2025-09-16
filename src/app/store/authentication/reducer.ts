import { createReducer, on } from '@ngrx/store';
import { user } from './state';
import * as actions from './action';

const initialState: user = {
  userId: -1,
  token: '',
  refresh_token: '',
};

export const tokenReducer = createReducer(
  initialState,

  on(actions.addToken, (state, { user }) => {
    return { ...state, ...user };
  }),

  on(actions.refreshToken, (state, { refresh_token }) => {
    return { ...state, refresh_token: refresh_token };
  }),

  on(actions.clearToken, () => initialState)
);
