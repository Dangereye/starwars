import React, { useState } from "react";
import CardList from "../components/shared/CardList";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";
import Pagination from "../components/shared/Pagination";
import useFetch from "../hooks/useFetch";

const Species = () => {
  const [page, setPage] = useState(1);
  const { isLoading, error, data: species } = useFetch(
    `https://swapi.dev/api/species/?page=${page}`
  );
  if (isLoading) {
    return <Loader text="A long time ago in a galaxy far, far away.." />;
  }

  if (error) {
    return <Message text={error} role="info" />;
  }

  return (
    <>
      <CardList title="Species" list={species.results} size="small" />
      <Pagination count={species.count} page={page} setPage={setPage} />
    </>
  );
};

export default Species;
