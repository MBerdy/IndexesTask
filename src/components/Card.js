import React from "react";

function Card (props) {
    return (
        <div className="item" >
            <div className="name">{props.name}</div>
            <div className="price">
                <div className="usd"> {props.ethPriceInsWei} </div>/
                <div className="cents"> {props.usdPriceInCent}</div>
            </div>
        <div className="cap">
            <div className="capitalization">{props.usdCapitalization}</div>
            <div className="percentage">{props.percentageChange}</div>
        </div>
    </div>)
    
}

export default Card;