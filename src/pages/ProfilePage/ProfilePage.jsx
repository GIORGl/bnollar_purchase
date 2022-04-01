import React from "react";

import Header from "../../components/Header/Header";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";

const ProfilePage = () => {
  return (
    <div>
      <Header />
      <ProfilePicture />
      <ProfileInfo />
    </div>
  );
};

export default ProfilePage;
