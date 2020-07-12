import React from "react";
import Header from "./components/Header/Header";
import Cars from "./components/Cars/Cars";


function App(props) {
    return (
        <div className="App">
            <Header/>
            <div>
                <Cars/>
            </div>
        </div>
    )
}
export default App;
