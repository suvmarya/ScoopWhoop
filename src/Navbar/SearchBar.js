import React, { useState }  from "react";

const SearchBar = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
      };
    return (

        <div className="main-searchbar">
            <div className="searchbar-search">
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? "fa fa-times" : "fa fa-bars"}></i>
                </div>
                <ul className={clicked ? "menu-list" : "menu-list close"}><input type="search" name="" id="" /></ul>
               
            </div>
            <h1>SearchBar</h1>
        </div>
    )
}
export default SearchBar;