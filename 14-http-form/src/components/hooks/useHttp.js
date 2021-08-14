import { useState, useCallback } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: requestConfig.headers ? requestConfig.headers : {},
      });
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      const data = await response.json();
      applyData && applyData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttp;
