import React, {Component} from "react";
import AccomplishmentCard from "../components/AccomplishmentCard";

class Accomplishments extends Component{
    state = {};

    render() {
        return(
            <div className="accomplishments-section" name="accomplishments-section">
                <AccomplishmentCard/>
            </div>
        )
    }
}

export default Accomplishments;