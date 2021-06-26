import { useRef, useState } from 'react';
import * as Styled from './styles';

export type CarouselArrayProps = {
  image?: string;
};

export type CarouselMovieProps = {
  slides?: CarouselArrayProps[];
};

export const CarouselMovie = ({ slides }: CarouselMovieProps) => {
  const [current, setCurrent] = useState(0);
  const length = slides?.length;

  const nextSlide = () => {
    current === 0
      ? setCurrent(-60.5 * (length - 1))
      : setCurrent(current + 60.5);
  };

  const prevSlide = () => {
    current === -60.5 * (length - 1)
      ? setCurrent(0)
      : setCurrent(current - 60.5);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <Styled.Wrapper>
        {slides.map((slide, index) => {
          return (
            <Styled.Wrapper_image
              data-testid="wrapper_image"
              lenght={current}
              key={index}
            >
              {<Styled.Image_slider src={slide.image} alt="travel image" />}
            </Styled.Wrapper_image>
          );
        })}
      </Styled.Wrapper>
      <Styled.ArrowRight onClick={prevSlide} data-testid="prev_slide" />
      <Styled.ArrowLeft onClick={nextSlide} data-testid="next_slide" />
    </>
  );
};
