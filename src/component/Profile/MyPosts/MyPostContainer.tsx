import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";


type MyPostsTypeProps = {
    // store: StoreType
}

export const MyPostContainer = (props: MyPostsTypeProps) => {
    // let state = props.store._state
    //
    // let addPost = () => {
    //     props.store.dispatch(addPostAC())
    // }
    // let onNewPostTextChange = (newPostText: string) => {
    //     props.store.dispatch(updateNewPostTextAC(newPostText))
    // }

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store._state;

                let addPost = () => {
                    store.dispatch(addPostAC())
                }
                let onNewPostTextChange = (newPostText: string) => {
                    store.dispatch(updateNewPostTextAC(newPostText))
                }
                return <MyPosts addPost={addPost} onNewPostTextChange={onNewPostTextChange} state={state}/>
            }
        }
        </StoreContext.Consumer>
    )
}
