import React from "react";
import classes from './MyPosts.module.css';

const MyPosts = () => {
    return (
    <div>
        <div className = 'posts'><h2>My posts</h2>
            <div className = {classes.item}>new post</div>
            <div>
                <div className = {classes.item}>Post1</div>
                <div className = {classes.item}>Post2</div>
            </div>
        </div>
    </div>
    )
}

export default MyPosts;