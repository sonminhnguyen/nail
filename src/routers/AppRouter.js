import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Header from '../components/partials/Header';
import Footer from '../components/partials/Footer';
import DashboardPage from '../components/DashboardPage';
import Contact from '../components/Contact';
import Help from '../components/Help';
import NotFoundPage from '../components/NotFoundPage';
import Login from "../components/Login";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/help" component={Help}/>
        <Route path="/login" component={Login}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;