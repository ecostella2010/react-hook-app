import React from 'react';

import {
    BrowserRouter as Router,
    Routes as Switch, 
    Route,
    //Redirect,
    //Link
  } from 'react-router-dom';

import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';


export const AppRouter = () => {
    return (
        <Router>
            <NavBar />
            <div className="container">
                <Switch>
                    <Route exact path="/" element={<HomeScreen />} />
                    <Route exact path="/about" element={<AboutScreen />} />
                    <Route exact path="/login" element={<LoginScreen />} />
                    <Route element={<HomeScreen />} />
                    {/* <Redirect to="/" /> */}
                </Switch>
            </div>
        </Router>
    )
}
