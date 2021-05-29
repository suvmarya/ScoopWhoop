import React from "react";
import Fresh from "./Fresh";
import { NavLink } from "react-router-dom";
const Stories = () => {
    return (
        <>
            <div className="main-stories">
                <div className="sub-main-stories">
                    <div className="stories-btn">
                        <button>Entertainment</button>
                    </div>
                    <div className="stories-heading">
                        <h1>16 Fan Favourite Cult Movies That You Didn't Know Were Copied</h1>
                    </div>
                    <div className="last-btn">
                        <NavLink to="#"> Read More</NavLink>
                    </div>
                </div>
            </div>
            <section className="container-lg mb-60">
                <div className="stories-section">
                    <div className="section-two">
                        <ul >
                            <li className="section-fresh">Fresh</li>
                            <li className="section-hot">Hot</li>
                        </ul>

                    </div>

                </div>
                <Fresh />
            </section>
        </>
    )
} 
export default Stories;