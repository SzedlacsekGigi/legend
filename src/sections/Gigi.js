import React, {Component} from "react";
import GigiAboutCard from "../components/GigiAboutCard";

class Gigi extends Component {
    status = {};

    render() {
        return (
            <div className="gigi-section" name="gigi-section">
                <div className="centerWrapper">
                    <GigiAboutCard/>
                </div>
            </div>
        )
    }
}

export default Gigi;