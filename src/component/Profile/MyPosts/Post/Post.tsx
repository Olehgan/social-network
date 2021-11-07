import React from 'react';
import s from './Post.module.css'

type  PostPropsType = {
    messages:string
}

export const Post = (props:PostPropsType) => {
    return (

                <div className={s.item}>
                    <img src={'https://pngimg.com/uploads/mr_bean/mr_bean_PNG16.png'} alt={'photo'} />
                    {props.messages}
                    <div>
                        like
                    </div>

                </div>
    )
}
