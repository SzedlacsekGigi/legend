import React, {Component} from "react";

class Popup extends Component{
    state={
        showPopup: false
    };

    render() {
        return (
            <div className="popup">
                <div className="popup_inner">
                    <iframe width="560" height="315" src={this.props.link} frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    <button onClick={this.props.closePopup} className="close-button">Appreciated</button>
                </div>
            </div>
        );
    }


}

export default Popup;