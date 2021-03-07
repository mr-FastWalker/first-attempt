import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let addPost = () => { props.dispatch(addPostActionCreator()) };
    let onPostChange = (text) => { props.dispatch(onPostChangeActionCreator(text)) };

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            newPostText={props.state.profilePage.newPostText}
            TextPostData={props.state.profilePage.TextPostData}
        />)
}

export default MyPostsContainer;