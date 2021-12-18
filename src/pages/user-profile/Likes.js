import React from "react";
import { usePostContext } from "../../context/postContext";
import SinglePost from "../../components/SinglePost";
import { useParams } from "react-router-dom";

function Likes() {
  const { posts } = usePostContext();
  const { id } = useParams();

  const userPosts = posts.filter((post) => post.createdBy === id);

  return (
    <div>
      {userPosts.map((post) => {
        return <SinglePost key={post._id} user={id} {...post} />;
      })}
    </div>
  );
}

export default Likes;
