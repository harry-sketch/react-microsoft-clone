import React, { useState } from "react";
import "../components/Header.css";
import { Link } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

const Header = () => {
  const [inMobile, setInmobile] = useState(false);
  return (
    <nav>
      <div className="navbar__left">
        <div className="logo">
          <img src="./images/logo.png" alt="logo" className="main__logo" />
        </div>
        <ul
          className={inMobile ? "nav__links__mobile" : "nav__links"}
          onClick={() => {
            setInmobile(false);
          }}
        >
          <li className="nav__items">
            <Link to="">Microsoft 365</Link>
          </li>
          <li className="nav__items">
            <Link to="">Office</Link>
          </li>
          <li className="nav__items">
            <Link to="">Windows</Link>
          </li>
          <li className="nav__items">
            <Link to="">Surface</Link>
          </li>
          <li className="nav__items">
            <Link to="">Xbox</Link>
          </li>
          <li className="nav__items">
            <Link to="">Support</Link>
          </li>
        </ul>
        <div
          className="hamburger"
          onClick={() => {
            setInmobile(!inMobile);
          }}
        >
          {inMobile ? <CloseOutlinedIcon /> : <div className="line"></div>}
        </div>
      </div>
      <div className="nav__right">
        <div className="nav__rightFirst">
          <Link to="">All Microsoft</Link>
          <KeyboardArrowDownOutlinedIcon />
        </div>
        <div className="nav__icons">
          <Link to="">
            <SearchIcon />
            <ShoppingCartOutlinedIcon />
            <PersonAddOutlinedIcon />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
