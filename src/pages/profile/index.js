import React, { useState } from "react";
import { getUserData } from "../../utils/helpers";
import coverPhoto from "../../assets/no-cover-photo.png";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AiOutlineEdit } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { useUserContext } from "../../context/userContext";

function Profile() {
  const { updateUser } = useUserContext();
  const user = getUserData();
  const {
    coverPicture,
    followers,
    following,
    name,
    profilePicture,
    description,
  } = user;
  const [editName, setEditName] = useState(name);
  const [editDesc, setEditDesc] = useState(description);
  const [canEditProfile, setCanEditProfile] = useState(false);

  const handleSubmission = () => {
    setCanEditProfile(!canEditProfile);

    canEditProfile && updateUser(editName, editDesc);
  };

  return (
    <section className="profile">
      <div>
        <img
          src={coverPicture ? coverPicture : coverPhoto}
          alt={`cover of ${name}`}
          className="profile__cover"
        />
      </div>

      <div className="contentContainer">
        <div className="profile__content">
          <Avatar src={profilePicture} variant="rounded"></Avatar>

          <div className="profile__info">
            <div className="profile__flex">
              {canEditProfile ? (
                <TextField
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  variant="outlined"
                  size="small"
                  label="Name"
                />
              ) : (
                <p className="profile__name">{editName}</p>
              )}
              <p className="profile__stats">
                <span>{following.length} </span>Following
              </p>
              <p className="profile__stats">
                <span>{followers.length} </span>Followers
              </p>
            </div>

            {canEditProfile ? (
              <TextField
                value={editDesc}
                onChange={(e) => setEditDesc(e.target.value)}
                variant="outlined"
                size="small"
                multiline
                minRows={3}
                label="Description"
              />
            ) : (
              <div className="profile__desc">{editDesc}</div>
            )}
          </div>

          <Button
            variant="contained"
            startIcon={canEditProfile ? <BsCheck /> : <AiOutlineEdit />}
            onClick={handleSubmission}
            disabled={editName === "" && true}
          >
            {canEditProfile ? "save" : "edit"}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
