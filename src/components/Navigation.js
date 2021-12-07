import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/tweeter.svg";
import logoMobile from "../assets/tweeter-small.svg";
import Avatar from "@mui/material/Avatar";
import SettingsModal from "./SettingsModal";
import { getUserData } from "../utils/helpers";
import { BsFillCaretDownFill } from "react-icons/bs";

function Navigation() {
  const user = getUserData();
  const { name, profilePicture } = user;
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  const navLinks = ["home", "explore", "bookmarks"];

  return (
    <nav className="nav">
      <Link to="/home">
        <img src={logo} alt="tweeter logo" className="nav__logoDesktop" />
        <img src={logoMobile} alt="tweeter logo" className="nav__logoMobile" />
      </Link>

      <ul className="nav__links">
        {navLinks.map((link, index) => {
          return (
            <li key={index} className="nav__item">
              <NavLink
                to={`/${link}`}
                className={({ isActive }) =>
                  isActive ? "nav__link nav--active" : "nav__link"
                }
              >
                {link}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <button
        className="nav__profile"
        onClick={() => {
          setIsSettingsModalOpen(!isSettingsModalOpen);
        }}
      >
        <Avatar variant="rounded">
          {profilePicture ? profilePicture : undefined}
        </Avatar>
        <p className="mobile--hide">{name}</p>
        <BsFillCaretDownFill className="mobile--hide" />

        <SettingsModal isOpen={isSettingsModalOpen} />
      </button>
    </nav>
  );
}

export default Navigation;
