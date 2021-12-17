import React from "react";
import Avatar from "@mui/material/Avatar";
import { convertDate } from "../utils/helpers";

function AvatarWithText({ name, profilePicture, date }) {
  return (
    <div className="avatar">
      <Avatar
        className="avatar__image"
        variant="rounded"
        src={profilePicture ? profilePicture : undefined}
      />

      <div className="avatar__text">
        <p className="text--bold">{name}</p>
        <p className="text--small">{convertDate(date)}</p>
      </div>
    </div>
  );
}

export default AvatarWithText;
