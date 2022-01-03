import React from "react";
import {Login} from "./Login";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {LoginParamsType} from "../../api/Api";
import {loginTC} from "../../redux/auth-reducer";



type MSTP = {
    isAuth:boolean
};

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
