import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import store from "./redux/store";
import {Provider} from "./StoreContext";


export let rerenderEntireTree = () => {
    debugger
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
store.subscribe(rerenderEntireTree);
rerenderEntireTree();


// reportWebVitals();