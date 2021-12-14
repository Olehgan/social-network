import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {DataType, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";

type MSTP = {
    data:DataType
    isAuth:boolean
}

type MDTP = {
    setAuthUserData: (data: DataType) => void

}

type HeaderComponentType = MSTP & MDTP

 class HeaderComponent extends React.Component<HeaderComponentType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
            .then(res => {
            this.props.setAuthUserData(res.data.data)
            })
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }

}
let mapStateToProps = (state: AppStateType): MSTP => {
    return {
        data:state.authMe.data,
        isAuth :state.authMe.isAuth
    }
}
export const HeaderContainer = connect<MSTP, MDTP, {}, AppStateType>(mapStateToProps,
    {setAuthUserData})(HeaderComponent)