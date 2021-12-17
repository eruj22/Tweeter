import React, { useEffect, useState } from "react";
import { authHeader } from "../utils/auth-header";
import axios from "axios";
import AvatarWithText from "./AvatarWithText";
import ButtonElement from "./ButtonElement";
import { BiComment } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { BiImageAlt } from "react-icons/bi";
import { Avatar } from "@mui/material";
import TextField from "@mui/material/TextField";

function SinglePost({
  user,
  createdAt,
  createdBy,
  description,
  image,
  likes,
  retweeted,
  saved,
}) {
  const [getPostAuthor, setGetPostAuthor] = useState("");
  const [isPostLoading, setIsPostLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_USER}/${createdBy}`,
      headers: authHeader(),
    })
      .then((res) => {
        setGetPostAuthor(res.data.user);
        setIsPostLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isPostLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <article className="post">
      <AvatarWithText
        profilePicture={getPostAuthor.profilePicture}
        date={createdAt}
        name={getPostAuthor.name}
      />

      <p className="post__description">{description}</p>

      <img src={image ? image : ""} alt="" />

      <div className="post__stats">
        <p className="text--small">{likes} Likes</p>
        <p className="text--small">0 Comments</p>
        <p className="text--small">{retweeted} Retweets</p>
        <p className="text--small">{saved} Saved</p>
      </div>

      <div className="post__action">
        <ButtonElement icon={<BiComment />} text="Comment" color="brown" />
        <ButtonElement icon={<FaRetweet />} text="Retweeted" color="green" />
        <ButtonElement icon={<AiOutlineHeart />} text="Liked" color="red" />
        <ButtonElement icon={<BsBookmark />} text="Saved" color="blue" />
      </div>

      <div className="post__reply">
        <Avatar variant="rounded" src={user ? user.coverPicture : ""} />
        <TextField label="Tweet your reply" variant="outlined" />

        <button className="post__addImage">
          <BiImageAlt />
        </button>
      </div>
    </article>
  );
}

export default SinglePost;
