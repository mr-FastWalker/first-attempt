import React from "react";
import MyPosts from './MyPosts/MyPosts'
import ProFileInfo from "./ProFileInfo/ProFileInfo";
import Post from "./MyPosts/Post/Post";

const Profile = (props) => {
    return (
        <div>
            <ProFileInfo/>
            <MyPosts TextPostData={props.TextPostData}/>
        </div>
    )
}

export default Profile;