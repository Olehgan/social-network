import React from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import {Navbar} from "./component/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {Profile} from "./component/Profile/Profile";
import {Dialogs} from "./component/Dialogs/Dialogs";
import {News} from './component/News/News';
import {Music} from './component/Music/Music';
import {Settings} from "./component/Settings/Settings";
import {Users} from "./component/Users/Users";
import {StateType} from "./redux/state";


type  AppPropsType = {
    state: StateType
    addPost: () => void
    updatePostText: (newText: string) => void
    // dialogs: DialogType[]
    // messages: MessageType[]
    // posts: PostType[]
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
                            posts={props.state.profilePage.posts} addPost={props.addPost}
                            newPostText={props.state.profilePage.newPostText} updatePostText={props.updatePostText}
                        />}/>
                    <Route path={'/dialogs'} element={<Dialogs dialogs={props.state.messagePage.dialogs}
                                                               messages={props.state.messagePage.messages}/>}/>
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
