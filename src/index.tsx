import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import store from "./redux/state";


export let rerenderEntireTree = () => {
    debugger
    ReactDOM.render(
        <BrowserRouter>
            <App state={store._state} dispatch={store.dispatch.bind(store)} store ={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
store.subscribe(rerenderEntireTree)
rerenderEntireTree();


reportWebVitals();