import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Takeaway from './pages/Takeaway'
import ChefAtHome from './pages/ChefAtHome'
import GroupEvents from './pages/GroupEvents'
import AboutUs from './pages/AboutUs'
import Contacts from './pages/Contacts'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

const Router = () => (
    <React.Fragment>
        <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/takeaway" component={Takeaway}/>
            <Route exact path="/chef_at_home" component={ChefAtHome}/>
            <Route exact path="/group_events" component={GroupEvents}/>

            <Route exact path="/about_us" component={AboutUs}/>
            <Route exact path="/contacts" component={Contacts}/>
            <Route exact path="/privacy" component={Privacy}/>

            <Route component={NotFound}/>
        </Switch>
    </React.Fragment>
)

export default Router
