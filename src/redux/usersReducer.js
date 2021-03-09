const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
     users: [],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, flagFollow: !u.flagFollow} // инвертируем флаг юзера, возвращаем копию
                        }
                        return u;
                    }
                ),
            };
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]} // добавляем новых пользователей к прежнему массиву
        }
        default:
            return state;
    }
}

export const flagFollowAC = (userId) => ({type: FOLLOW, userId}); // AC = ActionCreator (сокращаем названия имен)
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;