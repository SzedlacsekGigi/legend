import React, {Component} from "react";
import KobeAboutCard from "../components/KobeAboutCard";

class About extends Component{
    state = {};

    render() {
        return(
            <div className="about-section" name="about-section">
                <p>.</p>
                <KobeAboutCard/>
            </div>
        )
    }
}

export default About;