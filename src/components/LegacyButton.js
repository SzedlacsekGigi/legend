import React, {Component} from "react";
import Popup from "./Popup";

class LegacyButton extends Component{
    state={
        showPopup: false,
        videoLink: ""
    };


    onClick = (e) => {
        this.sendVideoLink(this.props.videoLink.link);
        this.togglePopup();
        console.log("name of button: " + e.target.name);
        console.log("link of video: " + this.props.videoLink.link);
        console.log("state of videoLink: " + this.state.videoLink);
        console.log("state of showpopup: " + this.state.showPopup);
    };

    togglePopup() {
        this.setState({showPopup: !this.state.showPopup});
    }

    sendVideoLink(link){
        this.setState({videoLink: link});
    }

    render() {
        return(
            <div className="something">
                <button onClick={this.onClick} className="popup-button" name={this.props.videoLink.button}>{this.props.videoLink.button}</button>
                {this.state.showPopup ?
                    <Popup closePopup={this.togglePopup.bind(this)} link={this.props.videoLink.link}/> : null
                }
            </div>
        )
    }
}

export default LegacyButton;