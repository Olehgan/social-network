import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {DialogType, MessageType} from "./component/Dialogs/Dialogs";
import {PostsType} from "./component/Profile/MyPosts/MyPosts";


let dialogs:  DialogType[] = [
    {id: 1, name: 'Oleg'},
    {id: 2, name: 'Dimas'},
    {id: 3, name: 'Any'},
    {id: 4, name: 'Ilia'},
]
let messages :MessageType[] = [
    {id: 1, message: 'How are you'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'How are you'},
]
let posts : PostsType[] = [
    {id:1, message:'Hi my friend' , likesCounts:20},
    {id:2, message:'How are you', likesCounts:15},
]
ReactDOM.render(
    <BrowserRouter>
        <App dialogs={dialogs} messages={messages} posts={posts}/>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
