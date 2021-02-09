import React from "react";
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return <div className={classes.content}>
        <div id='titlepost'>
            <img src='https://vologda-poisk.ru/system/Cover/images/000/105/321/big/more-plyazh-i-palmy-dlya-zhiteley-vologdy-rasskazyvaem-podrobnosti_1562555455.jpg' alt='content title' />
        </div>
            <MyPosts />
        </div>
    // </div>
}

export default Profile;