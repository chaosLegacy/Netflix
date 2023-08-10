import { useEffect, useState } from 'react';

import { Storage } from 'aws-amplify';

export const useGetStorage = (key: string, refetch?: unknown) => {
  const [data, setData] = useState<string>();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);

  const queryData = async () => {
    try {
      setLoading(true);
      const response = await Storage.get(key, {
        validateObjectExistence: true,
      });
      setData(response);
    } catch (err) {
      setError(err);
      // eslint-disable-next-line no-console
      console.error('UseStorage Error -> getStorage: ', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    queryData();
  }, [refetch]);

  return { data, error, loading };
};
