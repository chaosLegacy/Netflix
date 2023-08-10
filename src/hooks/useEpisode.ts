import { useEffect, useState } from 'react';

import { DataStore } from 'aws-amplify';

import { Episode, LazyEpisode } from '@/models';

export const useGetEpisodes = (seasonID?: string) => {
  const [data, setData] = useState<LazyEpisode[]>();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);

  const queryData = async () => {
    if (!seasonID) return;
    try {
      setLoading(true);
      const response = await DataStore.query(Episode, (u) =>
        u.seasonID.eq(seasonID),
      );
      setData(response);
    } catch (err) {
      setError(err);
      // eslint-disable-next-line no-console
      console.error('Episode Error -> _getGetEpisodes: ', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    queryData();
  }, [seasonID]);

  return { data, error, loading };
};
