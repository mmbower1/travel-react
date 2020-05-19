import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="topnav">
                    <div className="active" >React Traveler!</div>
                    <div className="score">Score={this.props.score} &nbsp; Top Score={this.props.topScore}</div>
                    <div className="className">{this.props.textCss}</div>
                    <h3>(Dont travel to the same city twice before visiting every single one first)</h3>
                </div>
            </div>
        );
    };
};

export default Navbar;
