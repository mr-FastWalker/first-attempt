import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import storeContext from "../../../storeContext";

const MyPostsContainer = (props) => {

    return (
        <storeContext.Consumer>
            {
            (store) => {
                let state = store.getState();
                let addPost = () => { store.dispatch(addPostActionCreator()) };
                let onPostChange = (text) => { store.dispatch(onPostChangeActionCreator(text)) };

                return <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    newPostText={state.profilePage.newPostText}
                    TextPostData={state.profilePage.TextPostData}
                />
            }
        }
        </storeContext.Consumer>
    )
}

export default MyPostsContainer;