import { createAction, props } from '@ngrx/store';
import { user } from './state';

export const addToken = createAction('Add token', props<{ user: user }>());

export const refreshToken = createAction('Refresh token', props<{ refresh_token: string }>());

export const clearToken = createAction('Clear token');
