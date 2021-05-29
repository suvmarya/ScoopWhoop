import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuList } from "./MenuList";
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="main-nav">
      <div className="navleft">
      <div className="logo">

        Scoop<font>Whoop</font>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}</ul>
      </div>
      <div className="navright" >
       <NavLink exact to="/signin" activeClassName="active" style={{color:"#1b91ff"}} > <i className="fa fa-bookmark-o"></i></NavLink>
       <NavLink exact to="/signin" activeClassName="active" style={{color:"#1b91ff" , textDecoration:"none",}}> <i className="fa fa-user-o"></i></NavLink>
        
        <NavLink exact to="#" activeClassName="active"><i className="fa fa-search" ></i></NavLink>
        <NavLink exact to="/allcategory"  activeClassName="active"><i onClick={handleClick}  className={clicked ? "fa fa-bars" : "fa fa-bars"}></i></NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
