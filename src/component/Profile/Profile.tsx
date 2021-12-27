import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../redux/profile-reducer";


type ProfileTypeProps = {
  profile:ProfileType
    status:string
    updateStatusTC: (status: string) => void
}

export const Profile = (props:ProfileTypeProps) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC}  />
            <MyPostContainer/>
        </div>
    )
}
