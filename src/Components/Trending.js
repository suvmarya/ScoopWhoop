import React from "react";
import { NavLink } from "react-router-dom";

const Trending = () =>{
    return(
        <>
        <div className="main-trending">
            <div className="sub-main-trending">
                <div className="trending-btn">
                    <button>Entertainment</button>
                </div>
                <div className="trending-heading">
                    <h1>34 New TV Shows &#38; Movies In May 2021 That'll Make Staying At Home Much Easier</h1>
                </div>
                <div className="last-btn">
                    <NavLink to="#"><span style={{color:"yellow"}}>Read More</span></NavLink>
                </div>
            </div>
        </div>
    </>
    )
}
export default Trending;