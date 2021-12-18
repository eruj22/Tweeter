import React from "react";
import Avatar from "@mui/material/Avatar";
import { convertDate } from "../utils/helpers";
import { Link } from "react-router-dom";

function AvatarWithText({ name, profilePicture, date, authorId }) {
  return (
    <div className="avatar">
      <Avatar
        className="avatar__image"
        variant="rounded"
        src={profilePicture ? profilePicture : undefined}
      />

      <div className="avatar__text">
        <Link to={`/profile/${authorId}`}>
          <p className="text--bold">{name}</p>
        </Link>
        <p className="text--small">{convertDate(date)}</p>
      </div>
    </div>
  );
}

export default AvatarWithText;
