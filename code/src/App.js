import React from "react";
import Header from "./components/Header/Header";
import Items from "./components/Items/Items";
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import Top from "./components/Top/Top";
import Services from "./components/Services/Services";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";


function App(props) {

    return (
        <HashRouter>
            <div className="App">
                    <Header/>
                    <Top/>
                    <Services/>
                    <Items lang={'en'}/>
                    <Contacts/>
                    <Footer/>
            </div>
        </HashRouter>
    )
}

export default App;
