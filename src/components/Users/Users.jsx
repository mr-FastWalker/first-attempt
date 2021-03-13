import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/avatarUserNull.jpg';

// let Users = (props) => {
//
//     if (props.users.length === 0) {
//
//         axios
//             .get("https://social-network.samuraijs.com/api/1.0/users")
//             .then(response => {
//                     props.setUsers(response.data.items);
//                 }
//             )
//     }
//
//     return (
//         <div>
//             {props.users.map( u => <div key={u.id}>
//                 <span>
//                     <div className={styles.userPhoto}>
//                         <img src={ u.photos.small != null ? u.photos.small : userPhoto } />
//                     </div>
//                     <div>
//                         {u.followed ?
//                             <button onClick={ () => {props.followSwitch(u.id)} } >Unfollow</button>:
//                             <button onClick={ () => {props.followSwitch(u.id)} } >Follow</button> }
//                     </div>
//                 </span>
//                 <span>
//                     <span>
//                         <div>{u.name}</div>
//                         <div>{u.status}</div>
//                     </span>
//                     <span>
//                         <div>{"u.location.country"}</div>
//                         <div>{"u.location.city"}</div>
//                     </span>
//                 </span>
//             </div>)}
//         </div>
//     )
// }

class Users extends React.Component {

    constructor(props) {
        super(props);

        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                    this.props.setUsers(response.data.items);
                }
            )
    }

    render() {
        return (
            <div>
                {this.props.users.map( u => <div key={u.id}>
                <span>
                    <div className={styles.userPhoto}>
                        <img src={ u.photos.small != null ? u.photos.small : userPhoto } />
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={ () => {this.props.followSwitch(u.id)} } >Unfollow</button>:
                            <button onClick={ () => {this.props.followSwitch(u.id)} } >Follow</button> }
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
}

export default Users;
