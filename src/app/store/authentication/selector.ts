import { createSelector, createFeatureSelector } from '@ngrx/store';
import { user } from './state';

export const selectUserFeature = createFeatureSelector<user>('user');

export const selectUser = createSelector(selectUserFeature, (state) => state);
