import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import {NavLink} from "react-router-dom";
import {Preloader} from "../../../common/Preloader";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile:ProfileType
    status:string
    updateStatusTC: (status: string) => void
}

export const ProfileInfo = (props:ProfileInfoPropsType) => {
    if(!props.profile){
      return   <Preloader/>
    }

    return (

        <div>
            <div>
                {/*<img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt={'images'}/>*/}
                <div className={s.description}>
                    <NavLink to={'/profile'}>
                       <img src={props.profile.photos.large} alt={'profile photo'}/>
                        </NavLink>
                    <div>
                        <ProfileStatus  status={props.status}  updateStatusTC={props.updateStatusTC} />
                    </div>

                </div>
            </div>
        </div>
    )
}
