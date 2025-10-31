import { useEffect, useState } from "react";


const FetchApi = (url) => {

const [errorData, setError] = useState();
  const [data, setData] = useState();

const apiUrl = `${import.meta.env.VITE_API_URL}${url}.json`;
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((categories) => setData(categories))
      .catch((error) => setError(error));
   
  }, [apiUrl]);
  if (errorData) {
    return <div>error: {errorData.message}</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }

  return {errorData, data};
}

export default FetchApi;