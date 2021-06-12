import { useState, useEffect } from 'react';

const useXkcdApi = (url) => {
  const [comic, setComic] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComic = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('xkcd API response not OK');
        }
        const comics = await response.json();
        setComic(comics);
      } catch (err) {
        setError(err);
      }
    };
    fetchComic();
  }, [url]);

  return { comic, error };
};

export default useXkcdApi;