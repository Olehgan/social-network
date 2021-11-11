import React from 'react';
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt={'images'}/>
                <div className={s.description}>ava + description</div>
            </div>
        </div>
    )
}
