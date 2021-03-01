import React from "react";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { RiGenderlessLine } from "react-icons/ri";
import { GiRobotGolem } from "react-icons/gi";

const GenderIcon = ({ gender, size }) => {
  return (
    <div className={`icon ${size} ${gender}`}>
      {gender === "male" && <IoMdMale />}
      {gender === "female" && <IoMdFemale />}
      {gender === "hermaphrodite" && <RiGenderlessLine />}
      {gender === "n/a" && <GiRobotGolem />}
      {gender === "none" && <GiRobotGolem />}
    </div>
  );
};

export default GenderIcon;
