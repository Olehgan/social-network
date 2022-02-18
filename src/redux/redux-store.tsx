import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionType} from "./profile-reducer";
import dialogsReducer, {DialogsActionType} from "./dialogs-reducer";
import usersReducer, {UsersActionType} from "./users-reducer";
import {AuthActionType, authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import {AppActionType, appReducer} from "./app-reducer";

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    // sidebar: sidebarReducer
    usersPage: usersReducer,
    authMe: authReducer,
    app: appReducer
});

export type AppStateType = ReturnType<typeof rootReducers>
let store = createStore(rootReducers, applyMiddleware(thunkMiddleware))

export type CommonActionType = UsersActionType|DialogsActionType | AppActionType | AuthActionType | ProfileActionType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, CommonActionType>

//@ts-ignore
window.store = store;
export default store;