import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pokedex from "./Pokedex";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Pokedex} />
            {/* <Route path="/details/:pokemonId" component={App} />
        <Route component={NotFound} /> */}
        </Switch>
    </BrowserRouter>
);

export default Router;