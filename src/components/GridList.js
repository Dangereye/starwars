import React from "react";
import PersonItem from "./PersonItem";

const GridList = ({ title, list, path }) => {
  return (
    <section>
      <div className="container">
        <h2>{title}</h2>
        <div className="grid-list">
          {path === "/person" &&
            list.map((person, index) => {
              return (
                <PersonItem key={`person-${index}`} url={person} path={path} />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default GridList;
