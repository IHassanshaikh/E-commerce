import { useState, useEffect } from "react";
import { FetchData } from "../utilities/api";

const useFetchID = (endpoint) => {
  const [data, setData] = useState(null); // Initialize as null
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const request = async () => {
      try {
        console.log('Fetching endpoint:', endpoint);
        setIsLoading(true); // Set loading before fetching
        const result = await FetchData(endpoint);

        if (result && result.data) {
          console.log('Fetched Data:', result);
          setData(result);
        } else {
          console.error('Unexpected response structure:', result);
          setData(null); // Handle unexpected structures
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    request();
  }, [endpoint]);

  return { data, error, isLoading }; // Return loading state as well
};

export default useFetchID;
