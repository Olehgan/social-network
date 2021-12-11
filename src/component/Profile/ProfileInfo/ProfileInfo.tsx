import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import {NavLink} from "react-router-dom";
import {Preloader} from "../../../common/Preloader";

type ProfileInfoPropsType = {
    profile:ProfileType
    toggleIsFetching: (isFetch: boolean) => void

}

export const ProfileInfo = (props:ProfileInfoPropsType) => {
    if(!props.profile){
      return   <Preloader/>
    }
    debugger
    return (

        <div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt={'images'}/>
                <div className={s.description}>
                    <NavLink to={'/profile'}>
                       <img src={props.profile.photos.large} alt={'profile photo'}/>
                        </NavLink>
                </div>
            </div>
        </div>
    )
}
