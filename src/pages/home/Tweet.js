import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { BiImageAlt } from "react-icons/bi";
import { BiWorld } from "react-icons/bi";
import Button from "@mui/material/Button";
import { usePostContext } from "../../context/postContext";

function Tweet() {
  const { createPost } = usePostContext();
  const [postContent, setPostContent] = useState("");

  const submitPost = (event) => {
    event.preventDefault();

    if (postContent === "") return;

    const content = { description: postContent };

    createPost(content);
    setPostContent("");
  };

  return (
    <div className="tweet">
      <p className="text--bold">Tweet something</p>

      <div className="tweet__line"></div>

      <div className="flex flex--gap1">
        <Avatar variant="rounded"></Avatar>

        <form className="flex--column flex--grow" onSubmit={submitPost}>
          <textarea
            rows={3}
            className="tweet__textarea"
            placeholder="What's happening?"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />

          <div className="flex flex--alignCenter">
            <button className="tweet__button">
              <BiImageAlt className="tweet__icon" />
            </button>

            <button className="tweet__button">
              <BiWorld className="tweet__icon" />
              Everyone can reply
            </button>

            <Button variant="contained" type="submit">
              Tweet
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Tweet;
