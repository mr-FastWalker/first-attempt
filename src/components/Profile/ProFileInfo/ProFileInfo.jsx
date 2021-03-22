import React from "react";
import s from './ProFileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";

const ProFileInfo = (props) => {
    if (!props.profile) { return <Preloader /> }
    let work = props.profile.lookingForAJob ? <div>Тема работы актуальна: {props.profile.lookingForAJobDescription}</div> :
        <div>Тема работы не актуальна</div>
    // let contacts = props.profile.contacts;

    return (
        <div>
            <div>
                <img
                    className={s.titleimg}
                    src='https://vologda-poisk.ru/system/Cover/images/000/105/321/big/more-plyazh-i-palmy-dlya-zhiteley-vologdy-rasskazyvaem-podrobnosti_1562555455.jpg'
                    alt='content title'
                />
            </div>
            <div className={s.descriptionBlock}>
                <div>{props.profile.fullName}</div>
                <img src={props.profile.photos.large} />
                <div>Чуточку о себе:  {props.profile.aboutMe}</div>
                {work}
                {/*<div>*/}
                {/*    {contacts.map(p => {*/}
                {/*        if (p != null) { return <span > {p} </span> }*/}
                {/*    })}*/}
                {/*</div>*/}
                {/*{*/}
                {/*    "aboutMe": "я круто чувак 1001%",*/}
                {/*    "contacts": {*/}
                {/*    "facebook": "facebook.com",*/}
                {/*    "website": null,*/}
                {/*    "vk": "vk.com/dimych",*/}
                {/*    "twitter": "https://twitter.com/@sdf",*/}
                {/*    "instagram": "instagra.com/sds",*/}
                {/*    "youtube": null,*/}
                {/*    "github": "github.com",*/}
                {/*    "mainLink": null*/}
                {/*},*/}
                {/*    "lookingForAJob": true,*/}
                {/*    "lookingForAJobDescription": "не ищу, а дурачусь",*/}
                {/*    "fullName": "samurai dimych",*/}
                {/*    "userId": 2,*/}
                {/*    "photos": {*/}
                {/*    "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",*/}
                {/*    "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"*/}
                {/*}*/}
                {/*}*/}
            </div>
        </div>
    )
}

export default ProFileInfo;