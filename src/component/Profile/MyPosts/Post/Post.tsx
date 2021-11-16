import React from 'react';
import s from './Post.module.css'

type  PostPropsType = {
    messages: string
    likesCounts: number
}

export const Post = (props: PostPropsType) => {
    return (

        <div className={s.item}>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFb5fMw2UHXHnnNcW6t2Dpa7A_Ubc-9sTvEA&usqp=CAU'} alt={'photo'}/>
            {props.messages}
            <div>
                <span>like</span> {props.likesCounts}
            </div>

        </div>
    )
}
