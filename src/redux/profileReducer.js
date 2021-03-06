const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    TextPostData: [
        {id: 1, textPost: 'Привет! Это первый пост', Likes: 44},
        {id: 2, textPost: 'А это второй пост', Likes: 56},
        {id: 3, textPost: 'Третий пост до кучи', Likes: 8},
    ],
    newPostText: 'введите текст сообщения'
}

const profileReducer = (state= initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                textPost: state.newPostText,
                Likes: 0
            }
            state.TextPostData.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.NewPostText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, NewPostText: text});

export default profileReducer;