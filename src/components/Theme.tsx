import React, { useEffect } from "react";
import bg_0 from "../assets/images/Vector0.svg";
import bg_1 from "../assets/images/Vector1.svg";
import bg_2 from "../assets/images/Vector2.svg";

const Theme = () => {

    // useEffect(() => {

    // }, [3600000])


    return (
      // Background
      <div className="grid h-screen bg-pinkky w-screen absolute z-0"> 
        <img src={bg_1} alt="" className="grid"/>

        <img src={bg_0} alt="" className="grid absolute top-0"/>
        <img src={bg_2} alt="" className="grid absolute bottom-0"/>
      </div>
    );
}

export default Theme;