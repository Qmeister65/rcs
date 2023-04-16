import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import formReducer from '@/store/formReducer';
import mainReducer from '@/store/mainReducer';
import { service } from '@/service';

const rootReducer = combineReducers({
  formReducer,
  mainReducer,
  [service.reducerPath]: service.reducer,
});
export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(service.middleware),
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
