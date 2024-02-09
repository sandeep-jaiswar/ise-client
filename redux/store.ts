import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user'

const rootReducer = combineReducers({
    user: userReducer
});

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
};

export const store =  makeStore()
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch