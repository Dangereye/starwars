import React from "react";
import Button from "../shared/Button";

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
          <img
            width="700px"
            height="467px"
            src={src}
            alt={alt}
            title={thanks}
            loading="lazy"
          />
        </div>
        <div className="text">
          <span className="section-subtitle">Explore</span>
          <h2 className="section-title">{title}</h2>
          <p>{paragraph}</p>
          <Button path={path} css={css} text={text} />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
