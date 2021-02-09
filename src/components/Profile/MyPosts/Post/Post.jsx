import React from "react";
import classes from './Post.module.css';

const Post = () => {
    return (
            <div className={classes.item}>
               <img src='https://cs8.pikabu.ru/post_img/2018/02/19/10/151906309217261182.jpg' alt='avatar' />
               Text post1
               <div>
                   <span> Like</span>
               </div>
            </div> 
    )
}

export default Post;