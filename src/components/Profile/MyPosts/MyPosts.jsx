import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx'

const MyPosts = (props) => {

    let newPostElement = React.createRef(); //создается ссылка, которую можно использовать ниже для выбора объекта (вместо id)

    let Posts = props.TextPostData.map (p => <Post TextPost={p.textPost} Likes={p.Likes}/>);

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                    <button onClick={ addPost }>Add post</button>
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