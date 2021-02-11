import React from "react";
import MyPosts from './MyPosts/MyPosts'
import ProFileInfo from "./ProFileInfo/ProFileInfo";

const Profile = () => {
    return (
        <div>
            <ProFileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile;