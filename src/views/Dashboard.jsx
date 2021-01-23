import React from 'react';
import { Switch, Route} from 'react-router-dom';

import NavBar from '../components/NavBar';
import DashboardNav from '../components/DashboardNav';
import DashboardApps from '../components/DashboardApps';
import DashboardAvailable from '../components/DashboardAvailable';
import DashboardUsers from '../components/DashboardUsers';


export default function Dashboard(props) {

  return (
    <>
      <NavBar />
      <DashboardNav location={ props.location } />
      <Switch>
        <Route path="/aplicaciones" exact component={ DashboardApps } />
        <Route path="/disponibles" exact component={ DashboardAvailable } />
        <Route path="/usuarios" exact component={ DashboardUsers} />     
      </Switch>
    </>
  );
}
