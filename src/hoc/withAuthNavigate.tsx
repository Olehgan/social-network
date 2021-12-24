import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";

type MSTP  = {
    isAuth: boolean
}
type MDTP = {
}

const mapStateToProps = (state: AppStateType):MSTP => {
    return {
        isAuth: state.authMe.isAuth
    }
}

export function withAuthNavigate<T>(Component: ComponentType<T>) {
    function NavigateContainer(props: MSTP) {
        let {isAuth,...restProps}=props
        if (!props.isAuth) return <Navigate to={'/login'}/>
        return <Component {...restProps as T }/>
    }

    return connect<MSTP, MDTP, {}, AppStateType>(mapStateToProps)(NavigateContainer)

}
