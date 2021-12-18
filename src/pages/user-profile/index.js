import React, { useState, useEffect } from "react";
import { authHeader } from "../../utils/auth-header";
import ProfileLinks from "./ProfileLinks";
import coverPhoto from "../../assets/no-cover-photo.png";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Outlet, useParams } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { getUserData } from "../../utils/helpers";
import { AiOutlineEdit } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { useUserContext } from "../../context/userContext";

function Profile() {
  const { updateUser } = useUserContext();
  const [userData, setUserData] = useState({});
  const { _id } = getUserData();
  const { id } = useParams();
  const user = getUserData();
  const {
    coverPicture,
    followers,
    following,
    name,
    profilePicture,
    description,
  } = userData;
  const [editName, setEditName] = useState(user.name);
  const [editDesc, setEditDesc] = useState(user.description);
  const [canEditProfile, setCanEditProfile] = useState(false);

  const isUsersProfile = id === _id ? true : false;

  const handleSubmission = () => {
    setCanEditProfile(!canEditProfile);

    canEditProfile && updateUser(editName, editDesc);
  };

  const getUser = (id) => {
    axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_USER}/${id}`,
      headers: authHeader(),
    })
      .then((res) => {
        setUserData(res.data.user);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUser(id);
  }, [id]);

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
        <div className="profile__card">
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
                <p className="profile__name">
                  {isUsersProfile ? user.name : name}
                </p>
              )}
              <p className="profile__stats">
                <span>{following ? following.length : 0} </span>Following
              </p>
              <p className="profile__stats">
                <span>{followers ? followers.length : 0} </span>Followers
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
              <div className="profile__desc">
                {isUsersProfile ? user.description : description}
              </div>
            )}
          </div>

          {isUsersProfile ? (
            <Button
              variant="contained"
              startIcon={canEditProfile ? <BsCheck /> : <AiOutlineEdit />}
              onClick={handleSubmission}
              disabled={editName === "" && true}
            >
              {canEditProfile ? "save" : "edit"}
            </Button>
          ) : (
            <Button variant="contained" startIcon={<AiOutlineUserAdd />}>
              Follow
            </Button>
          )}
        </div>

        <div className="profile__content">
          <ProfileLinks id={id} />

          <div className="profile__posts">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
