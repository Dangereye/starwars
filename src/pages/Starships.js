import React, { useState } from "react";
import CardList from "../components/shared/CardList";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";
import Pagination from "../components/shared/Pagination";
import useFetch from "../hooks/useFetch";

const Starships = () => {
  const [page, setPage] = useState(1);
  const { isLoading, error, data: starships } = useFetch(
    `https://swapi.dev/api/starships/?page=${page}`
  );
  if (isLoading) {
    return <Loader text="A long time ago in a galaxy far, far away.." />;
  }

  if (error) {
    return <Message text={error} role="info" />;
  }

  return (
    <>
      <CardList title="Starships" list={starships.results} />
      <Pagination count={starships.count} page={page} setPage={setPage} />
    </>
  );
};

export default Starships;
