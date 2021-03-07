import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {
//
//     return (
//         <storeContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState();
//                 let addPost = () => { store.dispatch(addPostActionCreator()) };
//                 let onPostChange = (text) => { store.dispatch(onPostChangeActionCreator(text)) };
//
//                 return <MyPosts
//                     updateNewPostText={onPostChange}
//                     addPost={addPost}
//                     newPostText={state.profilePage.newPostText}
//                     TextPostData={state.profilePage.TextPostData}
//                 />
//             }
//         }
//         </storeContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        TextPostData: state.profilePage.TextPostData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(onPostChangeActionCreator(text))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;