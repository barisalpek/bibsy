import React, { useEffect } from "react";
import bg_0 from "../assets/images/Vector0.svg";
import bg_1 from "../assets/images/Vector1.svg";
import bg_2 from "../assets/images/Vector2.svg";

const Theme = () => {
  // useEffect(() => {

  // }, [3600000])

  return (
    // Background
    <div className="bg-pinkky absolute z-0 grid h-screen w-screen">
      <img src={bg_1} alt="" className="grid" />

      <img src={bg_0} alt="" className="absolute top-0 grid" />
      <img src={bg_2} alt="" className="absolute bottom-0 grid" />
    </div>
  );
};

export default Theme;
