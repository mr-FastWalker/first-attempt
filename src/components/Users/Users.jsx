import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/avatarUserNull.jpg';

let Users = (props) => {

    if (props.users.length === 0) {

        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                    props.setUsers(response.data.items);
                }
            )
        // props.setUsers([
        //     {id: 1, fullName: 'Alex S.', status: 'i`m cool friend', location: {city: 'Karaganda', country: 'Gonduras'}, flagFollow: false, photoUrl: 'https://www.startfilm.ru/images/base/film/30_12_12/big_67767_mike4_h.jpg'},
        //     {id: 2, fullName: 'Dimych A.', status: 'no need nothing', location: {city: 'Atlas', country: 'Gonduras'}, flagFollow: true, photoUrl: 'https://tageswoche.ch/wp-content/uploads/2013/06/cms-image-002037379.jpg'},
        //     {id: 3, fullName: 'Serega F.', status: 'how much is the fish?', location: {city: 'Alkatrass', country: 'Transilvania'}, flagFollow: false, photoUrl: 'https://a-static.besthdwallpaper.com/zabavnye-glyadya-chuzhdo-oboi-1280x720-11298_45.jpg'},
        //     {id: 4, fullName: 'Olesya D.', status: 'fine', location: {city: 'Ponchik', country: 'Disney'}, flagFollow: true, photoUrl: 'https://avatarko.ru/img/kartinka/12/zhivotnye_kot_ochki_11485.jpg'},
        //     {id: 5, fullName: 'Kuzia W.', status: 'les dremuchiy', location: {city: 'UzbekCity', country: 'Neverland'}, flagFollow: false, photoUrl: 'https://cdn.fishki.net/upload/post/2018/04/06/2562238/podborka-prikolnyx-kartinok-70.jpg'},
        // ])
    }

    return (
        <div>
            {props.users.map( u => <div key={u.id}>
                <span>
                    <div className={styles.userPhoto}>
                        <img src={ u.photos.small != null ? u.photos.small : userPhoto } />
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={ () => {props.followSwitch(u.id)} } >Unfollow</button>:
                            <button onClick={ () => {props.followSwitch(u.id)} } >Follow</button> }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}

export default Users;

