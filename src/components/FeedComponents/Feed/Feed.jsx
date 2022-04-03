import React, { useState } from "react";
import SwipeProfiles from "../Swipe_Profiles/SwipeProfiles";
import "./Feed.css";

const Feed = () => {
  const [newActive, setNewActive] = useState(true);
  const [popularActive, setPopularActive] = useState(false);
  const [favouriteActive, setFavouriteActive] = useState(false);

  return (
    <div className="feed">
      <SwipeProfiles />
      <div className="sort_btns_wrapper">
        <button>New</button>
        <button>Popular</button>
        <button>Favourite</button>
      </div>
    </div>
  );
};

export default Feed;
