import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {addPost, RootState, state, subscribe, updatePostText} from './redux/state';
import reportWebVitals from "./reportWebVitals";



export let rerenderEntireTree = (state: RootState) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updatePostText={updatePostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state);
subscribe(rerenderEntireTree)
reportWebVitals();