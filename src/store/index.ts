import storage from 'redux-persist/lib/storage'
import {Middleware, combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import AuthSlice from './auth-store';

export const reducers = combineReducers({
  auth: AuthSlice,
});

const persistConfig = {
  key: 'root',
  storage: storage,
  version: 1,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares: Middleware[] = [
  /* other middlewares */
];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      //   serializableCheck: false,
    }).concat(middlewares),
});

export type StoreDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;