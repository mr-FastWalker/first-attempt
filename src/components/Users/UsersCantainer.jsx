import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {flagFollowAC, setUsersAC} from "../../redux/usersReducer";


let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        followSwitch: (userId) => {
            dispatch(flagFollowAC(userId));
        },
    }
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;