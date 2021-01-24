import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Row from 'react-bootstrap/Row';

import NavBar from '../components/NavBar';
import DashboardNav from '../components/DashboardNav';
import DashboardApps from '../components/DashboardApps';
import DashboardAvailable from '../components/DashboardAvailable';
import DashboardUsers from '../components/DashboardUsers';


export default function Dashboard(props) {
  return (
    <>
      <NavBar />
      <DashboardNav { ...props } />
      <Row className="justify-content-center py-3 px-3">
        <Switch>
          <Route path="/dashboard/aplicaciones" exact component={ DashboardApps } />
          <Route path="/dashboard/disponibles" exact component={ DashboardAvailable } />
          <Route path="/dashboard/usuarios" exact component={ DashboardUsers} />
          <Redirect from='/dashboard' to='/dashboard/aplicaciones' />   
        </Switch>
      </Row>
    </>
  );
}
