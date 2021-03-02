import React, { useState, useEffect } from "react";
import CardList from "../components/shared/CardList";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";
import Pagination from "../components/shared/Pagination";
import useFetch from "../hooks/useFetch";

const Planets = () => {
  const [page, setPage] = useState(1);
  const { isLoading, error, data: planets } = useFetch(
    `https://swapi.dev/api/planets/?page=${page}`
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  if (isLoading) {
    return <Loader text="A long time ago in a galaxy far, far away.." />;
  }

  if (error) {
    return <Message text={error} role="info" />;
  }

  return (
    <>
      <CardList title="Planets" list={planets.results} size="small" />
      <Pagination count={planets.count} page={page} setPage={setPage} />
    </>
  );
};

export default Planets;
