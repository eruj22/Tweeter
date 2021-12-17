import React from "react";

function Trends() {
  return (
    <aside className="trends">
      <p className="text--bold">Trends for you</p>

      <div className="trends__items">
        <div className="trends__item">
          <p className="trends__hashtag text--bold">#programming</p>
          <p className="text--small">231k Tweets</p>
        </div>

        <div className="trends__item">
          <p className="trends__hashtag text--bold">#programming</p>
          <p className="text--small">231k Tweets</p>
        </div>

        <div className="trends__item">
          <p className="trends__hashtag text--bold">#programming</p>
          <p className="text--small">231k Tweets</p>
        </div>

        <div className="trends__item">
          <p className="trends__hashtag text--bold">#programming</p>
          <p className="text--small">231k Tweets</p>
        </div>
      </div>
    </aside>
  );
}

export default Trends;
