import { Mapmovie } from './map_movie';

describe('Function Mapmovie()', () => {
  it('should error undefined', () => {
    const Arraynoded = Mapmovie();

    expect(Arraynoded).toBe(undefined);
  });
  it('should map without data ', () => {
    const Arraynoded = Mapmovie({
      results: [
        {
          backdrop_path: '',
          vote_average: '',
          original_name: '',
        },
      ],
    })[0];
    expect(Arraynoded.image).toBe('');
    expect(Arraynoded.Levelcolor).toBe('');
  });
  it('should map whith data', () => {
    const Arraynoded = Mapmovie({
      results: [
        {
          backdrop_path: '/miOnymJ0dN2psWBB8Vleo3fUyrc.jpg',
          vote_average: 8.2,
          original_name: 'Fatherhood',
        },
      ],
    })[0];
    expect(Arraynoded.image).toBe('/miOnymJ0dN2psWBB8Vleo3fUyrc.jpg');
    expect(Arraynoded.Levelcolor).toBe(8.2);
  });
  it('should map whith key object title different than titlemovie', () => {
    const Arraynoded = Mapmovie({
      results: [
        {
          original_name: 'Fathesrhood',
        },
      ],
    })[0];

    expect(Arraynoded).toStrictEqual({
      image: '',
      Levelcolor: '',
      titleMovie: 'Fathesrhood',
    });
  });
});
