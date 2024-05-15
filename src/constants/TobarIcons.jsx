import React from "react";
import bell from "../../src/assets/img/bell.png";
import set from "../../src/assets/img/set.png";
import user from "../../src/assets/img/user.png";

export default function TobarIcons() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <img
          src={bell}
          alt="Bell"
          style={{ width: "32px", height: "32px", marginRight: "10px" }}
        />
        <img
          src={set}
          alt="Settings"
          style={{ width: "32px", height: "32px", marginRight: "10px" }}
        />
        <img
          src={user}
          alt="User"
          style={{ width: "32px", height: "32px", marginRight: "10px" }}
        />
      </div>
    </div>
  );
}
