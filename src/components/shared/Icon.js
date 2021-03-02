import React from "react";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { MdErrorOutline } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { RiGenderlessLine } from "react-icons/ri";
import { GiRobotGolem, GiTank } from "react-icons/gi";
import { IoPlanetSharp } from "react-icons/io5";
import { AiFillBug } from "react-icons/ai";
import { RiSpaceShipFill } from "react-icons/ri";

const Icon = ({ icon, size }) => {
  return (
    <div className={`icon ${size} ${icon}`}>
      {icon === "spinner" && <CgSpinnerTwoAlt />}
      {icon === "error" && <MdErrorOutline />}
      {icon === "movie" && <MdLocalMovies />}
      {icon === "male" && <IoMdMale />}
      {icon === "female" && <IoMdFemale />}
      {icon === "hermaphrodite" && <RiGenderlessLine />}
      {icon === "n/a" && <GiRobotGolem />}
      {icon === "none" && <GiRobotGolem />}
      {icon === "planet" && <IoPlanetSharp />}
      {icon === "species" && <AiFillBug />}
      {icon === "starship" && <RiSpaceShipFill />}
      {icon === "vehicle" && <GiTank />}
    </div>
  );
};

export default Icon;
