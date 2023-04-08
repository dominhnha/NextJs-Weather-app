import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
