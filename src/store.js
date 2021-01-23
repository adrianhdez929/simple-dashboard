import { createStore } from 'redux';

import authReducer from './reducers/auth';


const initialState = {};

const store = createStore(
    authReducer,
    initialState,
);

export default store;
