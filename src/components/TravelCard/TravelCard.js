import React from "react";
import "./TravelCard.css";
    
    const TravelCard = props => (
        <div onClick={(event)=> props.buttonChoice(event)} className="card-wrapper">
            <div className="card">
                <div className="img-container">
                    <h3>{props.name}</h3>
                    <img index={props.index} src={props.image} alt={props.name}/>
                </div>
            </div>
            <div className="content">
                <ul>
                    <p>
                        <strong>Name: </strong> {props.name}
                    </p>
                </ul>
            </div>
        </div>
    );

export default TravelCard;