import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="topnav">
                    <a className="active" href="#home">Clicky Game ||</a>
                    <div className="score">Score={this.props.score} Top Score={this.props.topScore}</div>
                </div>
            </div>
        );
    };
};

export default Navbar;