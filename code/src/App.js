import React from "react";
import Header from "./components/Header/Header";
import Items from "./components/Items/Items";
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';


function App(props) {

    return (
        <HashRouter>
            <Redirect to={"/cars_ru"}/>
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/cars_ru" render={() => <Items lang={'ru'}/>}/>
                    <Route path="/cars_eng" render={() => <Items lang={'eng'}/>}/>
                </Switch>

            </div>
        </HashRouter>
    )
}

export default App;
