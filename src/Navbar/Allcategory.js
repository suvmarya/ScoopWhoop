import React from "react";
import { Link } from "react-router-dom";
import hindi from "../images/scoopwhoop_hindi.png";
import tested from "../images/oktested.png";
import unscripted from "../images/unscripted.png";
import sketches from "../images/sketches.png";
import SwipeToSlide from "../Components/Slider";
import Footer from "../Components/Footer";

const Allcategory = () => {
    return (
        <div className="main-allcategory">
            <div className="sub-category">
                <div className="btn-category">
                    <Link exact to="/signin" activeClassName="active"><button>Sign In</button></Link>

                </div>
                <div className="navigation-category">
                    <div className="nav-cat">
                        <h2 className="nav-heading"> <span>Categories</span> <span className="head-line"></span></h2>
                        <div className="cat-list">
                            <ul className="menu-items">
                                <li role="menuitem" className="menu-item"><Link to="#">News</Link></li>
                                <li role="menuitem" className="menu-item"> <Link to="#">What`s your mood? </Link></li>
                                <li role="menuitem" className="menu-item"> <Link to="#">Entertainment</Link> </li>
                                <li role="menuitem" className="menu-item"><Link to="#">Humor</Link></li>
                                <li role="menuitem" className="menu-item"><Link to="#">Opinion</Link></li>
                                <li role="menuitem" className="menu-item"><Link to="#">Food</Link></li>
                                <li role="menuitem" className="menu-item"><Link to="#">Travel</Link></li>
                                <li role="menuitem" className="menu-item"><Link to="#">Women</Link></li>
                                <li role="menuitem" className="menu-item"><Link to="#">LGBTQIA</Link></li>
                                <li role="menuitem" className="menu-item"><Link to="#">Animal</Link></li>
                                <li role="menuitem" className="menu-item"><Link to="#">Sex &#38; Realationship</Link></li>
                                <li role="menuitem" className="menu-item"><Link to="#">Culture</Link></li>
                                <li role="menuitem" className="menu-item"><Link to="#">Sports</Link></li>
                                <li role="menuitem" className="menu-item"><Link to="#">Tech</Link></li>
                                <li role="menuitem" className="menu-item"><Link to="#">Men</Link></li>
                            </ul>

                        </div>
                    </div>
                    <div className="nav-cat">
                        <h2 className="nav-heading"> <span>Our Channels</span> <span className="head-line"></span></h2>
                        <div className="nav-channel our-channel">
                            <div>
                                <Link><img className="" src={hindi} alt="scoopwhoop_hindi" /></Link>
                            </div>
                            <div><Link><img className="" src={tested} alt="oktested" /></Link></div>
                            <div><Link><img className="" src={unscripted} alt="unscripted" /></Link></div>
                            <div><Link><img className="" src={sketches} alt="sketches" /></Link></div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="cat-slider">
                <SwipeToSlide />
            </div>

            <div className="footer-cls">
                <Footer />
            </div>
        </div>
    )
}
export default Allcategory;