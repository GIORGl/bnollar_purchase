import React, { useState } from "react";
import styles from "./ProfileInfo.module.css";

import Vector from "../../assets/Vector.svg";
import ShowPosts from "../ShowPictureAndNft/ShowPosts";
import ShowNFT from "../ShowPictureAndNft/ShowNFT";

const ProfileInfo = () => {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <div className={styles.ProfileContainer}>
      <h1 className={styles.name}>Michael</h1>
      <p className={styles.username}>@mmicheal24</p>
      <p className={styles.description}>
        Capturing the story of your life, one chapter at a time.
      </p>
      <div className={styles.btnContainer}>
        <button className={styles.followBtn}>Follow</button>
        <button className={styles.messageBtn}>Message</button>
      </div>

      <div className={styles.posted}>
        <div className={styles.buttonDiv}>
          <button onClick={() => setShowPosts(true)}>
            <img src={Vector} alt="" />
            Post
          </button>
          <div className={showPosts ? styles.active : styles.inactive}></div>
        </div>
        <div className={styles.buttonDiv}>
          <button onClick={() => setShowPosts(false)}>NFT</button>
          <div className={!showPosts ? styles.active : styles.inactive}></div>
        </div>
      </div>

      {showPosts ? <ShowPosts /> : <ShowNFT />}
    </div>
  );
};

export default ProfileInfo;
