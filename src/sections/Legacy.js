import React, {Component} from "react";
import LegacyButton from "../components/LegacyButton";

class Legacy extends Component {

    videoLinks = [
        {button: "tear-me-down",
            link: "https://www.youtube.com/embed/tjRCk0JVzfc"},
        {button: "give-me-hope",
            link: "https://www.youtube.com/embed/4bJeXS-_PBY"},
        {button: "be-my-friend",
            link: "https://www.youtube.com/embed/KrGzQbMHZBE"},
        {button: "make-me-better",
            link: "https://www.youtube.com/embed/4gi9y3sTrXE"},
        {button: "make-me-understand",
            link: "https://www.youtube.com/embed/VSceuiPBpxY"},
        {button: "push-me-hard",
            link: "https://www.youtube.com/embed/Da-v4--Qn0U"},
        {button: "lift-me-up",
            link: "https://www.youtube.com/embed/4h2p08AfaQ8"},
        {button: "bruise-me",
            link: "https://www.youtube.com/embed/gxaCaHNQCRI"},
        {button: "teach-me",
            link: "https://www.youtube.com/embed/aSqeWUuQSlM"},
        {button: "save-me",
            link: "https://youtube.com/embed/XR4zWhcazoA"}
    ];

    state = {
        videoLinks: this.videoLinks
    };

    render() {
        return (
            <div className="legacy-section" name="legacy-section">
                <div className="legacy-button-grid">
                    <div className="legacy-button">
                        {this.state.videoLinks.map((videoLink) => (
                            <LegacyButton videoLink={videoLink}/>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Legacy;