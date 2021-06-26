import * as Styled from './styles';

import { ChevronLeft, ChevronRight } from '@styled-icons/boxicons-regular';
import { SliderData } from './mock';
import { useState } from 'react';
export type ImageProps = {
  image: string;
};
export type SliderProps = {
  slides: ImageProps[];
};
export const Slider = ({ slides = [] }: SliderProps) => {
  const [current, setCurrent] = useState(0);
  const length = slides?.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Styled.Wrapper>
      <Styled.ArrowRight onClick={prevSlide} data-testid="prev_slide" />
      <Styled.ArrowLeft onClick={nextSlide} data-testid="next_slide" />
      {slides.map((slide, index) => {
        return (
          <Styled.Wrapper_image
            key={index}
            Active={index === current ? true : false}
          >
            {current === index && (
              <Styled.Image_slider src={slide.image} alt="travel image" />
            )}
          </Styled.Wrapper_image>
        );
      })}
    </Styled.Wrapper>
  );
};
