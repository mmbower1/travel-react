import React from "react";
import "./TravelCard.css";
import "../../travels.json";
    
    const TravelCard = props => (
        <div onClick={()=> props.buttonChoice()} className="card-wrapper">
            <div className="card">
                <div className="img-container">
                <h3>{props.name}</h3>
                <img src={props.image} alt={props.name}/>
                </div>
            </div>
            <div className="content">
                <ul>
                    <p>
                        <strong>Name: </strong> {props.name}
                    </p>
                </ul>
                <span onClick={() => Math.floor(Math.random(props.id))} className="randomize"></span>
            </div>
        </div>
    );

export default TravelCard;