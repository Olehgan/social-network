import React from "react";
import profileReducer from "./profile-reducer";

import sidebarReducer from "./sidebar-reducer";
import {combineReducers, createStore} from "redux";
import dialogsPage from "./dialog-reducer";

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsPage,
    sidebar: sidebarReducer

})

export type AppStateType = ReturnType<typeof rootReducers >
let store = createStore(rootReducers)

export default store;