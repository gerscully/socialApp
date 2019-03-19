import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
// import api from './dataStore/stubAPI';
// import _ from 'lodash';
import Upcoming from './Upcoming';
import Past from './Past';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import socialBanner from './header.jpg';
import welcomeImg from './welcome.png';
import './App.css'

class App extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={socialBanner} alt="logo" />
                </header>
                <div class="btn-toolbar">
                    <a href="http://localhost:3000/upcoming" class="btn btn-success btn-lg" role="button" Link Button> Upcoming Events</a>
                    <a href="http://localhost:3000/past" class="btn btn-success btn-lg" role="button" Link Button> Past Events</a>
                </div>
                <div className="welcome">
                    <img src={welcomeImg} alt="logo" id=".welcome" />
                </div>
            </div>
        )
    }
}

class Router extends Component {
    render() {
        // let posts = _.sortBy(api.getAll(),
        //     (post) => post.id
        // );
        return (
            <BrowserRouter>
                <Switch>
                    {/* <Route path='/upcoming'
                        render={() => (<Upcoming posts = {posts} />)}
                    /> */}
                    <Route path='/upcoming' component={Upcoming} />
                    <Route path='/past' component={Past} />
                    <Route exact path='/' component={App} />
                    <Redirect from='*' to='/' />
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(
    <Router />,
    document.getElementById('root')) 