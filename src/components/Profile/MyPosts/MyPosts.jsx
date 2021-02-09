import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx'

const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div className={classes.posts}>
                <h2>My posts</h2>
                
                <Post />
                <Post />
                <Post />
                <Post />
              
            </div>
        </div>
    )
}

export default MyPosts;