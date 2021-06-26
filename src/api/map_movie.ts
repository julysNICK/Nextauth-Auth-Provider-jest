import { number } from 'prop-types';
import { Arraymovie } from './load_movie_trending';
export type ArrayResults = {
  results: [
    {
      genre_ids: [];
      original_language: string;
      original_title: string;
      poster_path: string;
      video: boolean;
      vote_average: string | number;
      overview: string;
      release_date: string;
      vote_count: string;
      title: string;
      adult: boolean;
      backdrop_path: string;
      original_name?: string;
      id: number;
      popularity: number;
      media_type: string;
    },
  ];
};

export const Mapmovie = (data = {} as Arraymovie) => {
  let trendingMovie = [];
  const { results } = data;
  trendingMovie = results?.map((r) => {
    return {
      image: r.backdrop_path || '',
      Levelcolor: r.vote_average || '',
      titleMovie: r.title || r.original_name || '',
    };
  });

  return trendingMovie;
};
