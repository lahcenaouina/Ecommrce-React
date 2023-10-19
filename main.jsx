import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {StoreProvider} from "easy-peasy";
import store from './Store/Store'



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
            <StoreProvider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </StoreProvider>
    </React.StrictMode>,
)
