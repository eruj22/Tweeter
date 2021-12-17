import React from "react";
import AvatarWithButton from "../../components/AvatarWithButton";

function FollowRecommend() {
  return (
    <aside className="followAside">
      <p className="text--bold">Who to follow</p>

      <div className="followAside__item">
        <AvatarWithButton name="random" />

        <p className="followAside__description">blah</p>
      </div>

      <div className="followAside__item">
        <AvatarWithButton name="random" />

        <p className="followAside__description">blah</p>
      </div>
    </aside>
  );
}

export default FollowRecommend;
