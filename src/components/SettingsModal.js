import React from "react";
import LinkElement from "./LinkElement";
import { MdAccountCircle } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { useAuthContext } from "../context/authContext";

function SettingsModal({ isOpen }) {
  const { logout } = useAuthContext();

  return (
    <div className={`settingsModal ${isOpen && "settingsModal--show"}`}>
      <LinkElement icon={<MdAccountCircle />} to="/profile">
        my profile
      </LinkElement>
      <LinkElement icon={<HiUserGroup />} to="#">
        group chat
      </LinkElement>
      <LinkElement icon={<IoMdSettings />} to="#">
        settings
      </LinkElement>
      <div className="settingsModal__line"></div>
      <LinkElement
        to="/"
        icon={<FiLogOut />}
        style={{ color: "red", paddingLeft: "2px" }}
        onClick={logout}
      >
        logout
      </LinkElement>
    </div>
  );
}

export default SettingsModal;
