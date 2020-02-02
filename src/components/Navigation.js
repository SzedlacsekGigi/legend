import React, {Component} from "react";
import NavBar, {ElementsWrapper} from "react-scrolling-nav";
import Main from "../sections/Main";
import About from "../sections/About";
import Accomplishments from "../sections/Accomplishments";
import Wisdom from "../sections/Wisdom";
import Gigi from "../sections/Gigi";
import Legacy from "../sections/Legacy";
import Legend from "../sections/Legend";

class Navigation extends Component {
    state = {};

    render() {
        const navbarItems = [
            {
                label: "Main",
                target: "main"
            },
            {
                label: "About",
                target: "about"
            },
            {
                label: "Output",
                target: "accomplishments"
            },
            {
                label: "Wisdom",
                target: "wisdom"
            },
            {
                label: "Gigi",
                target: "gigi"
            },
            {
                label: "Legacy",
                target: "legacy"
            },
            {
                label: "Legend",
                target: "legend"
            }
        ];
        return (
            <div className="navigationbar">
                <NavBar backgroundColor={"#000000"} height={70} linkClass={"link"} activeLinkClass={"activeLink"} items={navbarItems} offset={-20} duration={500} delay={0} />
                <div className="container">
                    <ElementsWrapper items={navbarItems}>
                        <div name="main" className="item">
                            <Main/>
                        </div>
                        <div name="about" className="item">
                            <About/>
                        </div>
                        <div name="accomplishments" className="item">
                            <Accomplishments/>
                        </div>
                        <div name="wisdom" className="item">
                            <Wisdom/>
                        </div>
                        <div name="gigi" className="item">
                            <Gigi/>
                        </div>
                        <div name="legacy" className="item">
                            <Legacy/>
                        </div>
                        <div name="legend" className="item">
                            <Legend/>
                        </div>
                    </ElementsWrapper>
                </div>
            </div>
        );
    }
}

export default Navigation;