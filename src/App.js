import React, { Component } from 'react';
import socialBanner from './header.jpg';
import welcomeImg from './welcome.png';
import './App.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={socialBanner} alt="logo" />
                    {/* <h1>Upcoming Events</h1> */}
                </header>
                <div className="welcome">
                    <img src={welcomeImg} alt="logo" id=".welcome" />
                </div>
            </div>
        );
    }
}
