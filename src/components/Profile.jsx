import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
    return         <div className={classes.content}>
        <div id='titlepost'>
            <img src='https://vologda-poisk.ru/system/Cover/images/000/105/321/big/more-plyazh-i-palmy-dlya-zhiteley-vologdy-rasskazyvaem-podrobnosti_1562555455.jpg' alt='content title'/>
        </div>
        <div id='avatar'>
            <img src='https://cs8.pikabu.ru/post_img/2018/02/19/10/151906309217261182.jpg' alt='avatar'/>
            description avatar
        </div>
        <div className = 'posts'>My posts
            <div className = {classes.item}>new post</div>
            <div>
                <div className = {classes.item}>Post1</div>
                <div className = {classes.item}>Post2</div>
            </div>
        </div>
    </div>
}

export default Profile;