import {
  CarouselNuke,
  CarouselNukeArrayProps,
} from '../../components/CarrouselNuke';
import { Main_section_single } from '../../components/main_section_single';
import { Navbar } from '../../components/Navbar';

export type ImageProps = {
  image: string;
};
export type SliderProps = {
  slides?: CarouselNukeArrayProps[];
  slidesTrending?: ImageProps[];
};
import * as Styled from './styles';

export function Home({ slides, slidesTrending }: SliderProps) {
  return (
    <Styled.Wrapper>
      <Navbar />
      <Main_section_single slides={slidesTrending} />
      <CarouselNuke slides={slides} />
      <CarouselNuke slides={slides} />
    </Styled.Wrapper>
  );
}
