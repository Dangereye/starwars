import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <span className="copyright">&copy; Craig Puxty 2021.</span>
        <span className="">
          Powered by{" "}
          <a href="https://swapi.dev" target="_blank" rel="noreferrer">
            swapi
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
