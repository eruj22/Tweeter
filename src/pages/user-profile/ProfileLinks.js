import React from "react";
import { Link } from "react-router-dom";

function ProfileLinks({ id }) {
  return (
    <div className="profile__links">
      <div className="profile__link">
        <Link to={`/profile/${id}`}>Tweets</Link>
      </div>
      <div className="profile__link">
        <Link to="replies">Tweets & Replies</Link>
      </div>
      <div className="profile__link">
        <Link to="likes">Likes</Link>
      </div>
    </div>
  );
}

export default ProfileLinks;
