import React from 'react';
import Home from './components/Home';
import Calendar from './components/Calendar';
import Navbar from './components/Navbar';
import Post from './components/Post';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App-styles">
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/cal/' component={Calendar} />
                    <Route path='/:post_id' component={Post} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
