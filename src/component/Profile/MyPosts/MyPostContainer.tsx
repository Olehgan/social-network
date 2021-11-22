import React from 'react';
import {StoreType,} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";


type MyPostsTypeProps = {
    store: StoreType
}

export const MyPostContainer = (props: MyPostsTypeProps) => {
   let state= props.store._state

    let addPost = () => {
        props.store.dispatch(addPostAC())
    }
    let onNewPostTextChange = (newPostText: string) => {
        props.store.dispatch(updateNewPostTextAC(newPostText))
    }

    return (
        <div>
            <MyPosts addPost={addPost} onNewPostTextChange={onNewPostTextChange} state={state}/>
        </div>

    )
}
