import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {AppContainer} from './App';
import {Provider} from "react-redux";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)

reportWebVitals();