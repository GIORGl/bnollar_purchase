import React from "react";
import styles from "./Header.module.css";

import Logo from "../../assets/RGB 2.svg";
import Notification from "../../assets/Notification.svg";
import Chat from "../../assets/Chat.svg";
import Avatar from "../../assets/Ellipse 2.svg";

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.LogoContainer}>
        <img src={Logo} alt="" />
        <input type="text" placeholder="Search..." />
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.UploadBtn}>Upload</button>
        <img
          style={{ fill: "#566370" }}
          className={styles.icons}
          src={Notification}
          alt="Notification Icon"
        />
        <button className={styles.iconBtn}>
          <img className={styles.icons} src={Chat} alt="Chat Icon" />
        </button>
        <button className={styles.iconBtn}>
          <img src={Avatar} alt="avatar" className={styles.avatar} />
        </button>
      </div>
    </nav>
  );
};

export default Header;
