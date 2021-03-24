import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/avatarUserNull.jpg';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); //округляет результат деления вверх до целого
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) { pages.push(i); } //заполняем массив страниц

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage} // для совпадения назначаем стиль
                                 onClick={(e) => { props.onPageChanged(p) } }
                    > {p} </span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div className={styles.userPhoto}>
                        <NavLink to = {'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button disabled={props.followingInProgress} onClick={() => {
                                props.toggleFollowingInProgress(true); //блокируем кнопку на время выполнения запроса
                                axios
                                    .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "86c8eb20-557c-49dd-8ad3-357ad2bea17a"
                                        }
                                    })
                                    .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.followSwitch(u.id)
                                            }
                                        })
                                    props.toggleFollowingInProgress(false); //разблокируем кнопку после запроса
                            }}>Unfollow</button> :
                            <button disabled={props.followingInProgress} onClick={() => {
                                props.toggleFollowingInProgress(true);
                                axios
                                    .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "86c8eb20-557c-49dd-8ad3-357ad2bea17a"
                                        }
                                    })
                                    .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.followSwitch(u.id)
                                            }
                                        })
                                    props.toggleFollowingInProgress(false);
                            }}>Follow</button>
                        }
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

