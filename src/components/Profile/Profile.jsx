import React from "react";
import ProFileInfo from "./ProFileInfo/ProFileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProFileInfo/>
            <MyPostsContainer
                dispatch={props.dispatch}
                state = {props.state}
            />
        </div>
    )
}

export default Profile;