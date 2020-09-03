import React from "react";
import "./Header.css";
import MenuOpenSharpIcon from "@material-ui/icons/MenuOpenSharp";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";

// ES7 snippet for fast function creation with rfce short cut
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuOpenSharpIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt=""
        />
      </div>

      <div className="header__input">
        <input placeholder="Search" type="text" />
        <SearchIcon className="header__inputButton" />
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
