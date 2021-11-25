import React from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import {Navbar} from "./component/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {Profile} from "./component/Profile/Profile";
import {News} from './component/News/News';
import {Music} from './component/Music/Music';
import {Settings} from "./component/Settings/Settings";
import {Users} from "./component/Users/Users";
import {DialogContainer} from "./component/Dialogs/DialogContainer";



type  AppPropsType = {
}
const App = (props: AppPropsType) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={'/profile'} element={
                        <Profile
                            // posts={props.store._state.profilePage.posts} dispatch={props.store.dispatch}
                            // newPostText={props.store._state.profilePage.newPostText}
                            // store={ props.store}
                        />}/>
                    <Route path={'/dialogs'} element={<DialogContainer/>}/>
                    <Route path={'/users/'} element={<Users/>}/>
                    <Route path={'/news/'} element={<News/>}/>
                    <Route path={'/music/'} element={<Music/>}/>
                    <Route path={'/settings/'} element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default App;
