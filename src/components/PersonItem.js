import React from "react";
import useFetch from "../hooks/useFetch";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { GiRobotGolem } from "react-icons/gi";
import { RiGenderlessLine } from "react-icons/ri";
import { ImSpinner9 } from "react-icons/im";
import { MdErrorOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const PersonItem = ({ url, path }) => {
  const { isLoading, error, data: person } = useFetch(url);
  const id = url.match(/\d{1,2}/g);

  return (
    <Link className="person-item" to={`${path}/${id}`}>
      <div
        className={`gender ${
          isLoading ? "spinner" : person ? person.gender : ""
        }`}
      >
        {isLoading ? (
          <ImSpinner9 />
        ) : error ? (
          <MdErrorOutline />
        ) : person ? (
          person.gender === "male" ? (
            <IoMdMale />
          ) : person.gender === "female" ? (
            <IoMdFemale />
          ) : person.gender === "hermaphrodite" ? (
            <RiGenderlessLine />
          ) : (
            <GiRobotGolem />
          )
        ) : (
          ""
        )}
      </div>
      <div className="info">
        <h4>{error ? "" : person ? person.name : "loading name.."}</h4>
        <p>
          {error
            ? "Error fetching data."
            : person
            ? person.birth_year
            : "loading birth year.."}
        </p>
      </div>
    </Link>
  );
};

export default PersonItem;
