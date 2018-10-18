import React from "react";
import "./TravelCard.css";

const TravelCard = props => (
    <div>
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image}></img>
            </div>
        </div>
        <div className="content">
            <ul>
                <li>
                    <strong>Name: </strong> {props.name}
                </li>
                <li>
                    <strong>Location: </strong> {props.location}
                </li>
                <li>
                    <strong>Area: </strong> {props.area}
                </li>
            </ul>
            <span onClick={() => props.removeTravel(props.id)} className="remove"></span>
        </div>
    </div>
);

export default TravelCard;