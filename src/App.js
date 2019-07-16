import React from 'react';
import Home from './components/Home';
import Calendar from './components/Calendar';
import Navbar from './components/Navbar';
import Post from './components/Post';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import CreateNewPost from './components/CreateNewPost';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App-styles">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/cal' component={Calendar}/>
          <Route path='/linkone' component={PageOne}/>
          <Route path='/linktwo' component={PageTwo}/>
          <Route path='/addnewpost' component={CreateNewPost}/>
          <Route path='/:post_id' component={Post}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
