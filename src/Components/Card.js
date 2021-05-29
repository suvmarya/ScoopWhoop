import React from "react";
import { NavLink } from "react-router-dom";
const Card = (props) => {
    return  (
    
            <div className="grid">
                <div className="grid-item">
                    <div className="card-img">
                        <img src={props?.imgsrc} alt="imgsrc" />

                    </div>
                    <div className="card-title">
                        <NavLink to="#" activeClassName="active">{props?.title}</NavLink>
                    </div>
                    <div className="card-heading">
                        <NavLink to="#" activeClassName="active"><h4>{props?.heading}</h4></NavLink>

                    </div>
                    <div className="card-name">
                        <NavLink to="#" activeClassName="active">{props?.name}</NavLink>

                    </div>
                    <div className="card-name">
                        <NavLink to="#" activeClassName="active" style={{color:"#333"}}><span>{props?.pub_date}</span> | {props?.readtime}</NavLink>

                    </div>
                </div>

            </div>

      
    )
}
export default Card;