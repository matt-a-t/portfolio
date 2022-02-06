import React, { Component } from "react";
import "./App.css";

import Jumbo from "./Jumbo";
import Work from "./Work";
import Footer from "./Footer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Jumbo />
                <Work />
                <Footer />
            </div>
        );
    }
}

export default App;
