import { useCallback, useState } from "react";

/* const useHttp = (requestConfig, applyData) => {
  // console.log("useHttp 1");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // console.log("useHttp 2");

  const sendRequest = async () => {
    // console.log("sendRequest 1");
    setIsLoading(true);
    // console.log("sendRequest 2");
    setError(null);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      // console.log("sendRequest 3");
      if (!response.ok) {
        // console.log("sendRequest 5");
        throw new Error("Request failed!");
      }

      const data = await response.json();
      console.log(data);

      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  //   return {
  //     isLoading: isLoading,
  //     error: error,
  //     sendRequest: sendRequest
  //   };

  //   Since I'm always using the same property names as variable names on the right side, we can also use a modern
  //   JavaScript shortcut here where we write this like that that's the same result or that will give us the same result.

  return {
    isLoading,
    error,
    sendRequest,
  };
}; */

// Using useCallback to avoid re-creation of sendRequest()
/* 
const useHttp = (requestConfig, applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      console.log(data);

      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, [requestConfig, applyData]);

  return {
    isLoading,
    error,
    sendRequest,
  };
}; 
*/

// Another appreoach
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      console.log(data);

      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};
export default useHttp;
