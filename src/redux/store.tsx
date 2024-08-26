
import { Middleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import { trackApi } from './services/TrackApi';

export const getQueries = state => state.queries;
export const getEntities = state => state.entities;

const reducer = combineReducers({
  [trackApi.reducerPath]: trackApi.reducer
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
  .concat(trackApi.middleware as Middleware)
});    

// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)

export default store;

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']
