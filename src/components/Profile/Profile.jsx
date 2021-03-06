import React from "react";
import MyPosts from './MyPosts/MyPosts'
import ProFileInfo from "./ProFileInfo/ProFileInfo";
import Post from "./MyPosts/Post/Post";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProFileInfo/>
            <MyPostsContainer
                dispatch={props.dispatch}
                state = {props.state}
                // TextPostData={props.profilePage.TextPostData}
                //      newPostText={props.profilePage.newPostText}
                //      dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;