import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly movies?: (Movie | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly movies: AsyncCollection<Movie>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

type EagerMovie = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Movie, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly poster: string;
  readonly year: number;
  readonly numberOfSeasons: number;
  readonly plot: string;
  readonly cast: string;
  readonly creator: string;
  readonly categoryID: string;
  readonly category?: Category | null;
  readonly seasons?: (Season | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMovie = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Movie, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly poster: string;
  readonly year: number;
  readonly numberOfSeasons: number;
  readonly plot: string;
  readonly cast: string;
  readonly creator: string;
  readonly categoryID: string;
  readonly category: AsyncItem<Category | undefined>;
  readonly seasons: AsyncCollection<Season>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Movie = LazyLoading extends LazyLoadingDisabled ? EagerMovie : LazyMovie

export declare const Movie: (new (init: ModelInit<Movie>) => Movie) & {
  copyOf(source: Movie, mutator: (draft: MutableModel<Movie>) => MutableModel<Movie> | void): Movie;
}

type EagerSeason = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Season, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly movieID: string;
  readonly movie?: Movie | null;
  readonly episodes?: (Episode | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySeason = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Season, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly movieID: string;
  readonly movie: AsyncItem<Movie | undefined>;
  readonly episodes: AsyncCollection<Episode>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Season = LazyLoading extends LazyLoadingDisabled ? EagerSeason : LazySeason

export declare const Season: (new (init: ModelInit<Season>) => Season) & {
  copyOf(source: Season, mutator: (draft: MutableModel<Season>) => MutableModel<Season> | void): Season;
}

type EagerEpisode = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Episode, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly poster: string;
  readonly duration?: number | null;
  readonly plot: string;
  readonly video: string;
  readonly seasonID: string;
  readonly season?: Season | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEpisode = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Episode, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly poster: string;
  readonly duration?: number | null;
  readonly plot: string;
  readonly video: string;
  readonly seasonID: string;
  readonly season: AsyncItem<Season | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Episode = LazyLoading extends LazyLoadingDisabled ? EagerEpisode : LazyEpisode

export declare const Episode: (new (init: ModelInit<Episode>) => Episode) & {
  copyOf(source: Episode, mutator: (draft: MutableModel<Episode>) => MutableModel<Episode> | void): Episode;
}