import { useEffect, useState } from 'react';

import { DataStore } from 'aws-amplify';

import { LazyMovie, Movie } from '@/models';

const useGetMovies = (categoryID: string) => {
  const [data, setData] = useState<LazyMovie[]>();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);

  const queryData = async () => {
    try {
      setLoading(true);
      const response = await DataStore.query(Movie, (u) =>
        u.categoryID.eq(categoryID),
      );
      setData(response);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    queryData();
  }, []);

  return { data, error, loading };
};

const useGetMovieByID = (movieID: string) => {
  const [data, setData] = useState<LazyMovie>();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);

  const queryData = async () => {
    try {
      setLoading(true);
      const response = await DataStore.query(Movie, movieID);
      setData(response);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    queryData();
  }, []);

  return { data, error, loading };
};

export { useGetMovies, useGetMovieByID };
