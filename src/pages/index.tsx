import { GetServerSideProps, GetStaticProps } from 'next';
import { LoadMoviesTrending } from '../api/load_movie_trending';
import { Home } from '../templates/Home';

export type IndexProps = {
  data: [
    {
      image: string;
      Levelcolor: number;
      titleMovie: string;
    },
  ];
};
export default function Index({ data }: IndexProps) {
  return <Home slidesTrending={data} slides={data} />;
}
export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  let data = null;

  try {
    data = await LoadMoviesTrending('b0b576b203b76cc04fcafb5edd212bbf');
    console.log('data', data);
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      data,
    },
  };
};
