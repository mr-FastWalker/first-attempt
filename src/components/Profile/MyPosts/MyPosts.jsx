import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx'

const MyPosts = () => {

    let TextPostData = [
        {id:1, textPost:'Привет! Это первый пост', Likes:44},
        {id:2, textPost:'А это второй пост', Likes:56},
        {id:3, textPost:'Третий пост до кучи', Likes:8},
    ];

    let Posts = TextPostData.map (p => <Post TextPost={p.textPost} Likes={p.Likes}/>);

    return (
        <div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                    <button>Add post</button>
            </div>

            <div className={classes.posts}>
                <h2>My posts</h2>

                {Posts}

                {/*<Post TextPost={TextPostData[0].textPost} Likes={TextPostData[0].Likes}/>*/}
                {/*<Post TextPost='А это второй пост' Likes='56'/>*/}
                {/*<Post TextPost='Третий пост до кучи' Likes='0'/>*/}

            </div>
        </div>
    )
}

export default MyPosts;