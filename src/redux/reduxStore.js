import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    DialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
})

let store = createStore(reducers);

window.store = store;

export default store;