import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(
            "Oops! Something went wrong? Please refresh the page, or try again later."
          );
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
        setIsLoading(false);
      })

      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [url]);
  return { isLoading, error, data };
};

export default useFetch;
