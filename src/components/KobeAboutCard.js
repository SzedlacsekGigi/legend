import React, {Component} from "react";

class KobeAboutCard extends Component{
    state={};

    render() {
        return(
            <div className="about-card">
                <h1>Kobe Bean Bryant</h1>
                <h5>1978.08.23. - 2020.01.26.</h5>
                <p className="about-text">Father</p>
                <p className="about-text">Husband</p>
                <p className="about-text">Black Mamba</p>
                <p className="about-text">Los Angeles Laker</p>
                <p className="about-text">Shooting guard</p>
                <p className="about-text">5 time NBA champion</p>
                <p className="about-text">2 time Olympic gold medalist</p>
                <p className="about-text">INSPIRATION TO MILLIONS</p>
            </div>
        )
    }
}

export default KobeAboutCard;