import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: !u.followed} // инвертируем флаг юзера, возвращаем копию
                        }
                        return u;
                    }
                ),
            };
        // case UNFOLLOW:
        //     return {
        //         ...state,
        //         users: state.users.map(u => {
        //                 if (u.id === action.userId) {
        //                     return {...u, followed: !u.followed} // инвертируем флаг юзера, возвращаем копию
        //                 }
        //                 return u;
        //             }
        //         ),
        // };
        case SET_USERS: {
            return {...state, users: action.users} // добавляем новых пользователей к прежнему массиву
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId ]
                    : state.followingInProgress.filter( id => id != action.userId )
            }
        }

        default:
            return state;
    }
}

// export const followSwitchSuccess = (userId) => ({type: FOLLOW, userId}); // AC = ActionCreator (сокращаем названия имен)
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unFollowSuccess = (userId) => ({type: FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsers = (currentPage, pageSize) => {   //getUsersThunkCreator

    return (dispatch) => {

        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    }
}

export const follow = (userId) => {   //getFollowThunkCreator

    return (dispatch) => {

        dispatch(toggleFollowingInProgress(true, userId)); //блокируем кнопку на время выполнения запроса

        usersAPI.getFollow(userId)

            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
            })
        dispatch(toggleFollowingInProgress(false, userId)); //разблокируем кнопку после запроса
    }
}

export const unFollow = (userId) => {   //getUnFollowThunkCreator

    return (dispatch) => {

        dispatch(toggleFollowingInProgress(true, userId)); //блокируем кнопку на время выполнения запроса

        usersAPI.getUnFollow(userId)

            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unFollowSuccess(userId))
                }
            })
        dispatch(toggleFollowingInProgress(false, userId)); //разблокируем кнопку после запроса
    }
}


export default usersReducer;



// reducer - чистая функция, работает СИНХРОННО