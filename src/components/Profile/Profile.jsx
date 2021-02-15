import React from "react";
import MyPosts from './MyPosts/MyPosts'
import ProFileInfo from "./ProFileInfo/ProFileInfo";
import Post from "./MyPosts/Post/Post";

const Profile = (props) => {
    return (
        <div>
            <ProFileInfo/>
            <MyPosts TextPostData={props.profilePage.TextPostData}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;