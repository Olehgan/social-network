import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";
import {AddNewPostForm} from "./AddNewPostForm/AddNewPostForm";


type MyPostsTypeProps = {
    newPostText: string
    posts: PostType[]
    // profilePage:PostTypeProps
    addPost: (newPostText: string) => void
    // onNewPostTextChange: (newPostText: string) => void
}

export const MyPosts = (props: MyPostsTypeProps) => {
    // let state = props.profilePage

    let postElements = props.posts.map((p) =>
        <Post
            messages={p.message}
            key={p.id}
            likesCounts={p.likesCounts}/>)

    // let addPostHandler = () => {
    //     props.addPost()
    // }
    // let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let text = e.currentTarget.value;
    //     props.onNewPostTextChange(text)
    //     console.log(text)
    // }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            {/*<div>*/}
            {/*    <div><textarea value={props.newPostText} onChange={onChangeHandler}>*/}
            {/*    </textarea></div>*/}
            {/*    <div>*/}
            {/*        <button onClick={addPostHandler}> Add post</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <AddNewPostForm addPost={props.addPost}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>

    )
}
