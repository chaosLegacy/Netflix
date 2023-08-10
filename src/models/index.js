// @ts-check
import { initSchema } from '@aws-amplify/datastore';

import { schema } from './schema';

const MediaType = {
  MOVIE: 'MOVIE',
  SERIES: 'SERIES',
};

const { Category, Movie, Season, Episode } = initSchema(schema);

export { Category, Movie, Season, Episode, MediaType };
