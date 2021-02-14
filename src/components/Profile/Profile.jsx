import React from "react";
import MyPosts from './MyPosts/MyPosts'
import ProFileInfo from "./ProFileInfo/ProFileInfo";
import Post from "./MyPosts/Post/Post";

const Profile = (props) => {
    return (
        <div>
            <ProFileInfo/>
            <MyPosts TextPostData={props.state.TextPostData} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;