import React from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import {Navbar} from "./component/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {Profile} from "./component/Profile/Profile";
import {Dialogs} from "./component/Dialogs/Dialogs";
import {News} from "./component/News/News";
import {Music} from './component/Music/Music';
import {Settings} from './component/Settings/Settings';


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={() => <Profile/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs/>}/>
                    <Route path={"/news/"} render={() => <News/>}/>
                    <Route path={"/music/"} render={() => <Music/>}/>
                    <Route path={"/settings/"} render={() => <Settings/>}/>
                </div>

            </div>
        </BrowserRouter>);
}
export default App;
