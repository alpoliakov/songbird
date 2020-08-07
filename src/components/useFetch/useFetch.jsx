import {useState, useEffect} from 'react'

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [isError, setIsError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
      }catch (error) {
        setIsError(error);
      }
    }
    fetchData();
  }, [url]);
  return { response, isError };
}

export default useFetch;