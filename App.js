import React from 'react';
import login from './components/login'
import {BrowserRouter,Route,Switch } from 'react-router-dom'
import  Leftpane from './Leftpan/Leftpane';
import Login from './components/login';

function App(){
 return (
  <BrowserRouter>
<div className="app">
<Leftpane/>

<switch>
  
  <Route path="/" exact >Home</Route>
  <Route path="/explore"  >Explore</Route>
  
  <Route path="/notification" >notification</Route>
  
  <Route path="/messages"  >Messages</Route>
  
  <Route path="/bookmarks">Bookmarks</Route>
  
  <Route path="/list">List</Route>
  
  <Route path="/profile" >profile</Route>
  </switch>
  <div className="Right pane">Right pane</div>
</div>
</BrowserRouter>

 );
}
export default App;
