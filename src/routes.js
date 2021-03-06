import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Timeline from './components/Timeline';
import FAQ from './components/FAQ';
import COVID from './components/Covid19';
import Admin from './components/Admin';
import { Route, Switch } from 'react-router-dom';

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
            <Switch>
                <Route path="/timeline">
                    <Timeline />
                </Route>
            </Switch>
            <Switch>
                <Route path="/faq">
                    <FAQ />
                </Route>
            </Switch>
            <Switch>
                <Route path="/covid19">
                    <COVID />
                </Route>
            </Switch>
            <Switch>
                <Route path="/admin">
                    <Admin />
                </Route>
            </Switch>
        </>
    );
};

