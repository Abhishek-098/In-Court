import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './Home';
import Message from './Message';
import Tdetails from './Tdetails';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Navbar';
import AddClient from './AddClient';
import Login from './Login';

const App = () =>{
    return(<>
        <Navbar/>
        <Switch>
            <Route exact path ='/' component = {Home}/>
            <Route path ='/message' component = {Message}/>
            <Route path ='/today-details' component = {Tdetails}/>
            <Route path ='/add-client' component = {AddClient}/>
            <Route path ='/log-in' component = {Login}/>
            {/* <Route path ='/' component = {SignOut}/> */}

        </Switch>

    </>);
}

export default App;