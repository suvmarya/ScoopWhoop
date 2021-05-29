import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () =>{
    return(
        <>
        <div className="main-footer">
            <ul>
                <li className="menu-item"><NavLink to="#" activeClassName="active">About Us</NavLink></li>
                <li className="menu-item"><NavLink to="#" activeClassName="active">Contact Us</NavLink></li>
                <li className="menu-item"><NavLink to="#" activeClassName="active">Advertise With Us</NavLink></li>
                
            </ul>
            <ul>
                <li className="menu-item"><NavLink to="#" activeClassName="active">Careers</NavLink></li>
                <li className="menu-item"><NavLink to="#" activeClassName="active">Privacy Policy</NavLink></li>
                <li className="menu-item"><NavLink to="#" activeClassName="active">Term And Conditions</NavLink></li>
                
            </ul>
        </div>
        </>
    )
}
export default Footer;