import React from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import {Navbar} from "./component/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {Profile} from "./component/Profile/Profile";
import {Dialogs, DialogType, MessageType} from "./component/Dialogs/Dialogs";
import {News} from './component/News/News';
import {Music} from './component/Music/Music';
import {Settings} from "./component/Settings/Settings";
import {PostsType} from "./component/Profile/MyPosts/MyPosts";

type  AppPropsType = {
    dialogs:DialogType[]
    messages:MessageType[]
    posts: PostsType[]
}
const App = (props:AppPropsType) => {

    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/profile'} element={<Profile posts={props.posts}/>}/>
                    <Route path={'/dialogs'} element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path={'/news/'} element={<News/>}/>
                    <Route path={'/music/'} element={<Music/>}/>
                    <Route path={'/settings/'} element={<Settings/>}/>
                </Routes>
            </div>

        </div>

    );
}
export default App;
