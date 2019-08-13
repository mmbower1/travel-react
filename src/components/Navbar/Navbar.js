import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="topnav">
                    <div className="active" >Clicky City Game!</div>
                    <div className="score">Score={this.props.score} &nbsp; Top Score={this.props.topScore}</div>
                    <div className="className">{this.props.textCss}</div>
                </div>
            </div>
        );
    };
};

export default Navbar;