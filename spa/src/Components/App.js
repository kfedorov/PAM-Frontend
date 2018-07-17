import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Welcome from "./Welcome";
import MonsterDatabase from "./MonsterDatabase";
import SpellDatabase from "./SpellDatabase";
import Monster from "./Monster";
import Spell from "./Spell";
import NotFound from "./NotFound";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route path="/" component={Header} />
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/monsters" component={MonsterDatabase} />
                    <Route path="/monsters/:monsterId" component={Monster} />
                    <Route exact path="/spells" component={SpellDatabase} />
                    <Route path="/spells/:spellId" component={Spell} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;
