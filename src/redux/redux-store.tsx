import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import {authReducer} from "./auth-reducer";
import  thunkMiddleware from "redux-thunk"

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    // sidebar: sidebarReducer
    usersPage: usersReducer,
    authMe: authReducer
});

export type AppStateType = ReturnType<typeof rootReducers>
let store = createStore(rootReducers, applyMiddleware(thunkMiddleware))
//@ts-ignore
window.store = store;
export default store;