import React from 'react';
import './App.css';
import {Navbar} from "./component/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {News} from './component/News/News';
import {Music} from './component/Music/Music';
import {Settings} from "./component/Settings/Settings";
import {DialogContainer} from "./component/Dialogs/DialogContainer";
import {UsersContainer} from "./component/Users/UsersContainer";
import {ProfileContainer} from "./component/Profile/ProfileContainer";
import {HeaderContainer} from "./component/Header/HeaderComponent";
import {LoginContainer} from "./component/Login/LoginContainer";
import {connect} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {initializeAppTC} from "./redux/app-reducer";
import {Preloader} from "./common/Preloader";


type MSTP = {
    initialized: boolean
}

type MDTP = {
    initializeAppTC: () => void
}

type AppPropsType = MSTP & MDTP

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/profile/:userId'} element={<ProfileContainer/>}/>
                        <Route path={'/profile/'} element={<ProfileContainer/>}/>
                        <Route path={'/dialogs'} element={<DialogContainer/>}/>
                        <Route path={'/users'} element={<UsersContainer/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                        <Route path={'/login'} element={<LoginContainer/>}/>
                        <Route path={'/404'} element={<h1>404. Page not Found </h1>}/>
                        {/*<Route path={'*'} element={<Navigate to={'/404'}/>}/>*/}
                    </Routes>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state: AppStateType): MSTP => {
    return {
        initialized: state.app.initialized
    }
}

export const AppContainer = connect<MSTP, MDTP, {}, AppStateType>(mapStateToProps,
    {initializeAppTC})(App)

export default App;
