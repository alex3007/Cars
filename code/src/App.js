import React from "react";
import Header from "./components/Header/Header";
import Items from "./components/Items/Items";
import {HashRouter, Route, Redirect} from 'react-router-dom';
import Top from "./components/Top/Top";
import Services from "./components/Services/Services";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

export default class AppJS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'eng'
        }
    }

    onChooseRu = () => {
        this.setState({lang: 'ru'});
    }
    onChooseEng = () => {
        this.setState({lang: 'eng'});
    }

    render() {

        let lang = this.state.lang
        return (
            <div className="App">
                <HashRouter>
                    <Header lang={lang}
                            onChooseEng={this.onChooseEng}
                            onChooseRu={this.onChooseRu}
                    />
                    <Top lang={lang}/>
                    <Items lang={lang}/>
                    <Services lang={lang}/>
                    <Contacts lang={lang}/>
                    <Footer/>
                </HashRouter>
            </div>
        )
    }
};
