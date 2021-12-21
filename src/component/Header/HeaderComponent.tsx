import React from 'react';
import {Header} from "./Header";
import {DataType, getAuthMeTC, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";

type MSTP = {
    data: DataType
    isAuth: boolean
}

type MDTP = {
    setAuthUserData: (data: DataType) => void
    getAuthMeTC: () => void
}

type HeaderComponentType = MSTP & MDTP

class HeaderComponent extends React.Component<HeaderComponentType> {
    componentDidMount() {
        // axios.get<AuthMeType>(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
        //     withCredentials:true
        // })
        // authAPI.me().then(res => {
        //     if (res.data.resultCode === 0) {
        //         this.props.setAuthUserData(res.data.data)
        //     }
        //
        // })
        this.props.getAuthMeTC();
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }

}

let mapStateToProps = (state: AppStateType): MSTP => {
    return {
        data: state.authMe.data,
        isAuth: state.authMe.isAuth
    }
}
export const HeaderContainer = connect<MSTP, MDTP, {}, AppStateType>(mapStateToProps,
    {setAuthUserData, getAuthMeTC})(HeaderComponent)