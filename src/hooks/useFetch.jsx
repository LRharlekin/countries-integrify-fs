import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let shouldCancel = false;

    const callFetch = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const newResponseJSON = await response.json();
        if (shouldCancel) return;
        setData(newResponseJSON);
        setError(null);
      } catch (newError) {
        if (shouldCancel) return;
        setError(newError);
        setData(null);
      }
      setIsLoading(false);
    };
    callFetch();
    return () => (shouldCancel = true);
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
}
