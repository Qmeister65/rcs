import { configureStore } from '@reduxjs/toolkit';
import formReducer from '@/store/formReducer';
import mainReducer from '@/store/mainReducer';
import { service } from '@/service';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    formReducer,
    mainReducer,
    [service.reducerPath]: service.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(service.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
