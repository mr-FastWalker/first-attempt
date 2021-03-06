import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    // userAvatar: null,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
                // userAvatar: action.data.photos.small
            };
        default:
            return state;
    }
}
export const setAuthUserData = (email, id, login) => ({
    type: SET_USER_DATA,
    data: {email, id, login}
});

export const getAuthUserData = () => (dispatch) => {
        authAPI.getMe()
            .then(responce => {
                    if ( responce.data.resultCode === 0 ) {
                        let {email, id, login} = responce.data.data;
                        dispatch(setAuthUserData (email, id, login));
                    }
                }
            )
    }



export default authReducer;