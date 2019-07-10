import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pokedex from "./Pokedex";
import PokeDetails from "./PokeDetails";
import Header from "./Header";

const Router = () => (
    <React.Fragment>
        <Header />
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Pokedex} />
                <Route path="/details/:pokemonId" component={PokeDetails} />
                {/* <Route component={NotFound} /> */}
            </Switch>
        </BrowserRouter>
    </React.Fragment>
);

export default Router;