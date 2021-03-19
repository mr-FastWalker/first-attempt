import React from "react";
import s from './ProFileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import styles from "../../Users/Users.module.css";

const ProFileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    let work = props.profile.lookingForAJob ? <div>Тема работы актуальна: {props.profile.lookingForAJobDescription}</div> :
        <div>Тема работы не актуальна</div>
    let contacts = props.profile.contacts;

    // debugger
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
            </div>
        </div>
    )
}

export default ProFileInfo;