import React, {Component} from "react";
import QuoteCard from "../components/QuoteCard";

class Wisdom extends Component{
    state={};

    render() {
        return(
            <div className="wisdom-section" name="wisdom-section">
                <QuoteCard/>
            </div>
        )
    }
}

export default Wisdom;