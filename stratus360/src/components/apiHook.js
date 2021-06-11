import { useState, useEffect } from 'react';

const xkcdURL = 'https://xkcd.com/info.0.json';

const useXkcdApi = () => {
  const [comic, setComic] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchComic = async () => {
      try {
        const response = await fetch(xkcdURL, {
            mode:'no-cors'
        });
        if (!response.ok) {
            throw new Error('xkcd API response not OK');
        }
        console.log("BYE");

        const comics = await response.json();
        setComic(comics);

      } catch (err) {
        setError(err);
      }
    };
    fetchComic();
  }, []);

  return { comic, error };
};

export default useXkcdApi;