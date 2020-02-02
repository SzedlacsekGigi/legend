import React, {Component} from "react";
import MainQuote from "../components/MainQuote";

class Main extends Component{
    state = {};
    render() {
        return(
            <div className="main-section" name="main-section">
                <MainQuote/>
            </div>
        );
    }
}

export default Main;