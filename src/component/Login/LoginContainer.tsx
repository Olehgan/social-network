import React from "react";
import {Login} from "./Login";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {LoginParamsType} from "../../api/Api";

type MSTP = {
    isAuth:boolean
}

type MDTP = {
    loginTC: (data: LoginParamsType) => void
}

let mapSteToProps = (state: AppStateType): MSTP => {
    return {
        isAuth : state.authMe.isAuth
    }
}

export const LoginContainer = connect<MSTP, MDTP, {}, AppStateType>(mapSteToProps,
    {loginTC})(Login);
