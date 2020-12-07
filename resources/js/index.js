import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './frontend/components/reduxStore/store';
import App from "./frontend/App";
import AdminApp from "./adminFrontend/App";

if (document.getElementById('root')) {
        ReactDOM.render(
        <Provider store={store}>
                <App />
        </Provider>, document.getElementById('root'));
}else{
        ReactDOM.render(
                <AdminApp />, 
        document.getElementById('admin'))   
}