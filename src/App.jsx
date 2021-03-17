import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './Home';
import Tdetails from './Tdetails';

import Navbar from './Navbar';
import AddClient from './AddClient';
import Login from './Login';


// ALL THE PATHS ALONG WITH COMPONENTS

const App = () =>{
    return(<>
        <Navbar/>
        <Switch>
            <Route exact path ='/' component = {Home}/>
            <Route path ='/today-details' component = {Tdetails}/>
            <Route path ='/add-client' component = {AddClient}/>
            <Route path ='/log-in' component = {Login}/>
            {/* <Route path ='/' component = {SignOut}/> */}

        </Switch>

    </>);
}

export default App;