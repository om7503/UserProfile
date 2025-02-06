import React from "react";
import "../App.css";

const ProfileCard = ({ user }) => {
  return (
    <div className="card">
      <div className="firstinfo">
        <img src={user?.picture?.large || "default-profile.png"} alt="User" />
        <div className="profileinfo">
          <h1>{`${user?.name?.title || ""} ${user?.name?.first || ""} ${user?.name?.last || ""}`}</h1>
          <h3>{user?.gender || "Not specified"}</h3>
          <p className="bio">Email: {user?.email || "N/A"}</p>
          <p className="bio">Phone: {user?.phone || "N/A"}</p>
          <p className="bio">Location: {`${user?.location?.city || "Unknown"}, ${user?.location?.country || "Unknown"}`}</p>
        </div>
      </div>
      <div className="badgescard">
        <span>🏆</span>
        <span>🌟</span>
        <span>🔥</span>
      </div>
    </div>
  );
};

export default ProfileCard;

