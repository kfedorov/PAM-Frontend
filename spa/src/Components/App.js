import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import monsters from "../data/monsters.json";
import spells from "../data/spells.json";

import Header from "./Header";
import Welcome from "./Welcome";
import MonsterDatabase from "./MonsterDatabase";
import SpellDatabase from "./SpellDatabase";
import MonsterSingle from "./MonsterSingle";
import Spell from "./Spell";
import NotFound from "./NotFound";

class App extends Component {
    state = {
        monsters: [],
        spells: [],
    };

    componentDidMount() {
        this.setState({
            monsters: monsters,
            spells: spells,
        });
    }

    render() {
        return (
            <div className="App">
                <Route path="/" component={Header} />
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route
                        exact
                        path="/monsters"
                        render={props => (
                            <MonsterDatabase
                                monsters={this.state.monsters}
                                spells={this.state.spells}
                                {...props}
                            />
                        )}
                    />
                    <Route
                        path="/monsters/:monsterId"
                        render={props => (
                            <MonsterSingle
                                monsters={this.state.monsters}
                                spells={this.state.spells}
                                {...props}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/spells"
                        render={props => <SpellDatabase spells={this.state.spells} {...props} />}
                    />
                    <Route
                        path="/spells/:spellId"
                        render={props => <Spell spells={this.state.spells} {...props} />}
                    />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;
