import React from "react";
import Button from "../Button";

const HomeSection = ({
  src,
  alt,
  thanks,
  title,
  paragraph,
  path,
  css,
  text,
}) => {
  return (
    <section className="homepage-section">
      <div className="container">
        <div className="image">
          <img src={src} alt={alt} title={thanks} />
        </div>
        <div className="text">
          <h4>Explore</h4>
          <h2 className="section-title">{title}</h2>
          <p>{paragraph}</p>
          <Button path={path} css={css} text={text} />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
