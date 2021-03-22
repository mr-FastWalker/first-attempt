import React from 'react';
import {connect} from "react-redux";
import {
    followSwitch,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {getUsers} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount);
                });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(data.items);
                }
            )
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    followSwitch={this.props.followSwitch}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         followSwitch: (userId) => {
//             dispatch(flagFollowAC(userId));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     }
// }

export default connect (mapStateToProps,
    {
    setUsers, //вместо mapStateToProps передаем объект {содержимое = ActionCreator}
    followSwitch,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    }
    )(UsersContainer);