import React from "react";
import { Link } from "react-router-dom";
const leftnav = {
    color:"#1b91ff",
    marginRight:"15px",
}
const Navbar = () => {
    return (
        <>
            <div class="nav">
                <div className="leftnav">
                <Link to="/" style={leftnav} exact >Stories</Link>
                <Link to="/meme" style={leftnav} >Meme</Link>
                <Link to="/quiezzes" style={leftnav} >Quiezzes</Link>
                <Link to="/spotlight" style={leftnav} >Spotlight</Link>
                <Link to="/trending" style={leftnav} >Trending</Link>
                <Link to="/videos" style={leftnav} >Videos</Link>
               
                </div>
                <div className="rightnav"></div>
                
            </div>
        </>
    )
}
export default Navbar;