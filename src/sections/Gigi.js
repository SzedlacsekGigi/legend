import React, {Component} from "react";
import GigiAboutCard from "../components/GigiAboutCard";

class Gigi extends Component {
    status = {};

    render() {
        return (
            <div className="gigi-section" name="gigi-section">
                    <GigiAboutCard/>
            </div>
        )
    }
}

export default Gigi;