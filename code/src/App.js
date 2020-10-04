import React from "react";
import Header from "./components/Header/Header";
import Items from "./components/Items/Items";
import {HashRouter,Route, Redirect} from 'react-router-dom';
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
        let langSwitch =
            <div className="container langArea">
                <div className="row">
                    <div className=" col-xs-6 text-center langBtn">
                        <p onClick={this.onChooseRu}>На Русском</p></div>
                    <div onClick={this.onChooseEng}
                         className="col-xs-6 text-center langBtn">
                        <p>In English</p>
                    </div>
                </div>
            </div>
        return (
            <div className="App">
                <HashRouter>
                    <header className="header">
                        <Header lang={lang}/>
                        {langSwitch}
                    </header>
                    <Top lang={lang}/>
                    <Services lang={lang}/>
                    <Items lang={lang}/>
                    <Contacts lang={lang}/>
                    <Footer/>
                </HashRouter>
            </div>
        )
    }
};
