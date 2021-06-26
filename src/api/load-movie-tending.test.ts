/* eslint-disable prefer-const */

import { LoadMoviesTrending } from './load_movie_trending';
import mockAxios from 'axios';

jest.mock('axios');

describe('Call axios', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should call whith data correct', async () => {
    const mockedGet = jest.spyOn(mockAxios, 'get').mockImplementation(() =>
      Promise.resolve({
        data: {
          page: 1,
          results: [
            {
              genre_ids: [Array],
              original_language: 'en',
              original_title: 'Luca',
              poster_path: '/7rhzEufovmmUqVjcbzMHTBQ2SCG.jpg',
              video: false,
              vote_average: 8.3,
              overview:
                'Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.',
              release_date: '2021-06-17',
              vote_count: 969,
              title: 'Luca',
              adult: false,
              backdrop_path: '/uAQrHntCccFpvxp75XdQgqexlJd.jpg',
              id: 508943,
              popularity: 5135.463,
              media_type: 'movie',
            },
          ],
        },
      }),
    );
    await LoadMoviesTrending('b0b576b203b76cc04fcafb5edd212bbf').then(() => {
      expect(mockedGet).toBeCalledTimes(1);
      expect(mockedGet).toBeCalledWith(
        'https://api.themoviedb.org/3/trending/all/day?api_key=b0b576b203b76cc04fcafb5edd212bbf',
      );
    });

    //   mockedGet.mockRestore();
  });
  it('should call whith data incorrect ', async () => {
    const mockedGetError = jest
      .spyOn(mockAxios, 'get')
      .mockImplementation(() => Promise.reject(new Error('Necessary key')));
    await LoadMoviesTrending();
    expect(mockedGetError).toBeCalledTimes(1);
    expect(mockedGetError).toBeCalledWith(
      'https://api.themoviedb.org/3/trending/all/day?api_key=',
    );
  });
});
