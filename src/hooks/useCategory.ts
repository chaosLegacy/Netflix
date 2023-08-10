import { useEffect, useState } from 'react';

import { DataStore } from 'aws-amplify';

import { Category, LazyCategory } from '@/models';

export const useGetCategory = () => {
  const [data, setData] = useState<LazyCategory[]>();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);

  const queryData = async () => {
    try {
      setLoading(true);
      const response = await DataStore.query(Category);
      setData(response);
    } catch (err) {
      setError(err);
      // eslint-disable-next-line no-console
      console.error('Category Error -> _getCategories: ', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    queryData();
  }, []);

  return { data, error, loading };
};
