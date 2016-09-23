import SignIn from './component/login.jsx'
import Register from './component/register.jsx'
import App from './component/app.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Router, Route, IndexRedirect, hashHistory} from 'react-router';
require('jquery');
require("bootstrap-webpack");

const router = <Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRedirect to='/register'/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={SignIn}/>
    </Route>
</Router>;

ReactDOM.render(
    router,
    document.getElementById("content")
);

console.log($('#content').text());

if (module.hot) {
    module.hot.accept();
}
