import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import insuranceSlice from '../reducers/insuranceSlice';

export const store = configureStore({
  reducer: {
    insurance: insuranceSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
