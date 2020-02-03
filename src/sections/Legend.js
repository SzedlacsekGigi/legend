import React, {Component} from "react";
import LegendSign from "../components/LegendSign";

class Legend extends Component {
    state = {};

    render() {
        return (
            <div className="legend-section" name="legend-section">
                <div className="signwrapper">
                    <LegendSign/>
                </div>
            </div>
        )
    }
}

export default Legend;