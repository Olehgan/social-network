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
import {StoreType, RootStateType} from "./redux/state";


type  AppPropsType = {
    dispatch: (action: any) => void
    state: RootStateType
    store: StoreType
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
                            posts={props.state.profilePage.posts} dispatch={props.dispatch}
                            newPostText={props.state.profilePage.newPostText}
                        />}/>
                    <Route path={'/dialogs'} element={<Dialogs store={props.store}/>}/>
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
