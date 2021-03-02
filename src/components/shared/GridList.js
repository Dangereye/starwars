import React from "react";
import GridItem from "./GridItem";

const GridList = ({ title, type, list, path }) => {
  return (
    <section>
      <div className="container">
        <h4>{title}</h4>
        <div className="grid-list">
          {list.map((item, index) => {
            return (
              <GridItem
                key={`${type}-${index}`}
                type={type}
                url={item}
                path={path}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GridList;
