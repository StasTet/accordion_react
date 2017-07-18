import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/home.jsx';
import About from '../components/about.jsx';
import Contacts from '../components/contacts.jsx';
import ToDo from '../components/toDo.jsx';
import NoMatch from '../components/noMatch.jsx';

export default class Routers extends Component {
    render() {
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/todo" component={ToDo} />
                <Route component={NoMatch}/>
            </Switch>
        )
    }
}