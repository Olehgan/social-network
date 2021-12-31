import React from 'react';
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC, PostType} from "../../../redux/profile-reducer";

//
// type MyPostsTypeProps = {
//     // store: StoreType
// }
//
// export const MyPostContainer = (props: MyPostsTypeProps) => {
//     // let state = props.store._state
//     //
//     // let addPost = () => {
//     //     props.store.dispatch(addPostAC())
//     // }
//     // let onNewPostTextChange = (newPostText: string) => {
//     //     props.store.dispatch(updateNewPostTextAC(newPostText))
//     // }
//
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let state = store._state;
//
//                 let addPost = () => {
//                     store.dispatch(addPostAC())
//                 }
//                 let onNewPostTextChange = (newPostText: string) => {
//                     store.dispatch(updateNewPostTextAC(newPostText))
//                 }
//                 return <MyPosts addPost={addPost}
//                                 onNewPostTextChange={onNewPostTextChange}
//                                 state={state}/>
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

type MSTP = {
    newPostText: string
    posts: PostType[]
    // profilePage:PostTypeProps
}

type MDTP = {
    addPost: (newPostText: string) => void
    // onNewPostTextChange: (newPostText: string) => void
}

let mapSteToProps = (state: AppStateType): MSTP => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
        // profilePage:state.profilePage
    }

}
let mapDispatchToProps = (dispatch: Dispatch): MDTP => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        },
        // onNewPostTextChange: (newPostText: string) => {
        //     dispatch(updateNewPostTextAC(newPostText))
        // }
    }
}
export const MyPostContainer = connect<MSTP, MDTP, {}, AppStateType>(mapSteToProps, mapDispatchToProps)(MyPosts);