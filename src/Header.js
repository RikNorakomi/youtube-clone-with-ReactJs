import React, { useState } from "react";
import "./Header.css";
import MenuOpenSharpIcon from "@material-ui/icons/MenuOpenSharp";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import { link, Link } from "react-router-dom";

// ES7 snippet for fast function creation with rfce short cut
function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuOpenSharpIcon />
        {/* Why use LINK instead of an <A> tag? because LINK does NOT refresh the page and instantly 
            updates the element on the page while <a> reloads the whole page! 
         */}
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt=""
          />
        </Link>
      </div>

      <div className="header__input">
        {/* An onChange needs to be added otherwise the useState hook will 
            always take the default empty string state */}
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        {/* Link is a React Router class that you can use to route to any url within your app
            inputSearch is the value updated by the useState hook */}
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="random avatar image"
          src="https://pickaface.net/gallery/avatar/unr_random_180527_1151_2bcb7h9.png"
        />
      </div>
    </div>
  );
}

export default Header;
