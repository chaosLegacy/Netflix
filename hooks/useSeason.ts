import { useEffect, useState } from 'react';

import { DataStore } from 'aws-amplify';

import { LazySeason, Season } from '@/models';

export const useGetSeasons = (movieID?: string) => {
  const [data, setData] = useState<LazySeason[]>();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);

  const queryData = async () => {
    if (!movieID) return;
    try {
      setLoading(true);
      const response = await DataStore.query(Season, (u) =>
        u.movieID.eq(movieID),
      );
      setData(response);
    } catch (err) {
      setError(err);
      // eslint-disable-next-line no-console
      console.error('Season Error -> _getGetSeasons: ', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    queryData();
  }, [movieID]);

  return { data, error, loading };
};
