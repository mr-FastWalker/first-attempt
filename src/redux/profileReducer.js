import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    TextPostData: [
        {id: 1, textPost: 'Привет! Это первый пост', Likes: 44},
        {id: 2, textPost: 'А это второй пост', Likes: 56},
        {id: 3, textPost: 'Третий пост до кучи', Likes: 8},
    ],
    newPostText: 'введите текст сообщения',
    profile: null,
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: "",
                TextPostData: [...state.TextPostData, {id: 4, textPost: state.newPostText, Likes: 0}],
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.NewPostText
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, NewPostText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
                dispatch(setUserProfile(response.data));
            }
        )
};

export default profileReducer;