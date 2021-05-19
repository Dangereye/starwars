import React from "react";

const NotFound = ({ history }) => {
  return (
    <section className="not-found">
      <div className="container">
        <h1>Oops!</h1>
        <h2>404 - Page not found.</h2>
        <p>The page you are looking for does not exist.</p>
        <button className="btn-large" onClick={() => history.push("/")}>
          Go home
        </button>
      </div>
    </section>
  );
};

export default NotFound;
