import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { AiOutlineUserAdd } from "react-icons/ai";

function AvatarWithButton({ name, profilePicture, followers = 0, onClick }) {
  return (
    <div className="avatar avatar--withButton">
      <Avatar
        className="avatar__image"
        variant="rounded"
        src={profilePicture ? profilePicture : undefined}
      />

      <div className="avatar__text">
        <p className="text--bold">{name}</p>
        <p className="text--small">{followers} followers</p>
      </div>

      <Button
        variant="contained"
        startIcon={<AiOutlineUserAdd />}
        onClick={onClick}
      >
        Follow
      </Button>
    </div>
  );
}

export default AvatarWithButton;
