import { 
    configureStore, 
    combineReducers,
    getDefaultMiddleware,
} from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist/es/constants';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whiteList: ['todos'],
}

const rootReducer = combineReducers({
    todo: persistReducer(persistConfig, todoReducer),
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [
        ...getDefaultMiddleware({
          thunk: false,
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
      ],
});

export const persistor = persistStore(store);