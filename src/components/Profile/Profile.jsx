import React from "react";
import ProFileInfo from "./ProFileInfo/ProFileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProFileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;