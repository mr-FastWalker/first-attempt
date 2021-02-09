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
                
                <Post TextPost = 'Привет! Это первый пост' Likes='44'/>
                <Post TextPost = 'А это второй пост' Likes='56'/>
                <Post TextPost = 'Третий пост до кучи' Likes='0'/>
                <Post />
              
            </div>
        </div>
    )
}

export default MyPosts;