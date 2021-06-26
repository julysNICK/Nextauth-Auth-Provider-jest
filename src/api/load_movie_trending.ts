import axios from 'axios';
import { Mapmovie } from './map_movie';

export type Arraymovie = {
  page?: number;
  results: [
    {
      original_title?: string;
      original_name?: string;
      title?: string;
      vote_average?: string | number;

      backdrop_path?: string;
    },
  ];
};
export const LoadMoviesTrending = async (slug = '') => {
  let trendingMovie = [];

  await axios
    .get<Arraymovie>(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${slug}`,
    )
    .then(async (res) => {
      console.log(res);
      const data = await res.data;

      trendingMovie = Mapmovie(data);
    })
    .catch((e) => {
      new Error('Necessary key');
    });
  return trendingMovie;
};
