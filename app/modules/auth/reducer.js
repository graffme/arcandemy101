import { AsyncStorage } from 'react-native';

import * as types from './actionTypes';

let initialState = { isLoggedIn: false, user: null };

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGGED_IN:
            const user = action.user;

            // Save token and data to Asyncstorage
            AsyncStorage.multiSet([
                ['user', JSON.stringify(user)]
            ]);

            return {...state, isLoggedIn: true, user };

        case types.LOGGED_OUT:
            let keys = ['user'];
            AsyncStorage.multiRemove(keys);

            return {...state, isLoggedIn: false, user: null};

        default:
            return state;
    }
};

export default authReducer;