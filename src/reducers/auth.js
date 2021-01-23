import { LOGIN_SUCCESS } from '../types';


const initialState = {
    isAuthenticated : null,
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
            };
        default:
            return;
    }
}

export default authReducer;
