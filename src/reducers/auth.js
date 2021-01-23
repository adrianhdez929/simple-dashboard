import { LOGIN_SUCCESS } from '../types';


const initialState = {
    isAuthenticated : null,
};

export default (state = initialState, action) => {
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
