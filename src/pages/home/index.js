import React from "react";
import { usePostContext } from "../../context/postContext";
import SinglePost from "../../components/SinglePost";
import Tweet from "./Tweet";
import { getUserData } from "../../utils/helpers";
import Trends from "./Trends";
import FollowRecommend from "./FollowRecommend";

function Home() {
  const { posts } = usePostContext();
  const user = getUserData();

  return (
    <section className="home">
      <div className="contentContainer">
        <div className="home__flex">
          <div className="home__feed">
            <Tweet />

            {posts.map((post) => {
              return <SinglePost key={post._id} user={user} {...post} />;
            })}
          </div>

          <div className="home__more">
            <Trends />

            <FollowRecommend />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
