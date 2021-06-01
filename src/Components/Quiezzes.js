import React from "react";
import { NavLink } from "react-router-dom";

const Quiezzes = () => {
    return (
        <>
            <div className="main-quiezzes">
                <div className="sub-main-quiezzes">
                    <div className="quiezzes-btn">
                        <button>Entertainment</button>
                    </div>
                    <div className="quiezzes-heading">
                        <h1>16 Fan Favourite Cult Movies That You Didn't Know Were Copied</h1>
                    </div>
                    <div className="last-btn">
                        <NavLink to="#" activeClassName="active">Read More</NavLink>

                    </div>
                </div>
            </div>
        </>

    )
}
export default Quiezzes;