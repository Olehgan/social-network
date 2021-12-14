import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Profile} from "../Profile";
import {ProfileType, setUserProfile} from "../../../redux/profile-reducer";
import {toggleIsFetching} from "../../../redux/users-reducer";
import {withParams} from "./whithParams/whithParams";
//
// export function withParams<T>(Component: ComponentType<T>) {
//     return (props: T) => {
//         const {userId} = useParams();
//
//         return (
//             <Component
//                 userId={userId}
//                 {...props}
//             />
//         );
//     };
// };


type ProfileTypeProps = {
    userId?: string
    profile: ProfileType
    toggleIsFetching: (isFetch: boolean) => void
    setUserProfile: (profile: ProfileType) => void


}
type MSTP = {
    profile: ProfileType

}
type MDTP = {
    setUserProfile: (profile: ProfileType) => void
    toggleIsFetching: (isFetch: boolean) => void

}

export class ProfileComponent extends React.Component<ProfileTypeProps> {

    componentDidMount() {
        let userId = this.props.userId
        if (!userId) {
            userId = '2'
        }
        // this.props.toggleIsFetching(true)
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(res => {
            this.props.setUserProfile(res.data)
        })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }

}

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

export const ProfileContainer = connect<MSTP, MDTP, {}, AppStateType>(mapStateToProps, {
    setUserProfile,
    toggleIsFetching
})(withParams(ProfileComponent))
