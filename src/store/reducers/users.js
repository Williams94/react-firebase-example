import { GET_USERS_RESULTS, GET_USERS_ERROR } from '../actions/users';

const initialState = {
    results: null,
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_RESULTS:
            return { ...state, results: action.data };
        case GET_USERS_ERROR:
            return { ...state, results: action.data };
        default:
            return state
    }
};

export default users;