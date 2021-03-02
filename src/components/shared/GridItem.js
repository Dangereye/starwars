import React from "react";
import Icon from "../shared/Icon";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const GridItem = ({ type, url, path }) => {
  const { isLoading, error, data } = useFetch(url);
  const id = url.match(/\d{1,2}/g);
  return (
    <Link className="list-item" to={`${path}/${id}`}>
      {isLoading && <Icon icon="spinner" size="icon-small" />}
      {error && <Icon icon="error" size="icon-small" />}
      {data && (
        <Icon icon={data.gender ? data.gender : type} size="icon-small" />
      )}
      <div className="info">
        {isLoading ? (
          <p>Loading..</p>
        ) : error ? (
          <p>Currently unavailable</p>
        ) : (
          <h5>{data.name ? data.name : data.title}</h5>
        )}
      </div>
    </Link>
  );
};

export default GridItem;
