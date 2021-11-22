import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import {MyPostContainer} from "./MyPosts/MyPostContainer";

type ProfileTypeProps = {
    store: StoreType
}

export const Profile = (props: ProfileTypeProps) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer store={props.store}/>
        </div>
    )
}
