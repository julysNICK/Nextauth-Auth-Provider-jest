import { useRef, useState } from 'react';
import * as Styled from './styles';
import Carousel from 'nuka-carousel';
import { ChevronLeft, ChevronRight } from '@styled-icons/boxicons-regular';
import { Card } from '../Card';
export type CarouselNukeArrayProps = {
  image?: string;
  Levelcolor?: number;
  titleMovie?: string;
};

export type CarouselNukeProps = {
  slides?: CarouselNukeArrayProps[];
};

export const CarouselNuke = ({ slides }: CarouselNukeProps) => {
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Styled.Wrapper_container>
      <Styled.Wrapper_span>
        <Styled.span>Top trending</Styled.span>
      </Styled.Wrapper_span>
      <Styled.Carousel_wrape
        slidesToShow={3}
        wrapAround={true}
        cellAlign="center"
        renderCenterLeftControls={({ previousSlide }) => {
          return (
            <Styled.ArrowLeft
              onClick={() => previousSlide()}
              aria-label="previous"
            />
          );
        }}
        renderBottomCenterControls={null}
        renderCenterRightControls={({ nextSlide }) => {
          return (
            <Styled.ArrowRight onClick={() => nextSlide()} aria-label="next" />
          );
        }}
      >
        {slides.map((slide, index) => {
          return (
            <Styled.Wrapper_image key={index} data-testid="wrapper_image">
              <Card
                titleMovie={slide.titleMovie}
                imageCard={`https://image.tmdb.org/t/p/w500${slide.image}`}
                Levelcolor={slide.Levelcolor}
              />
            </Styled.Wrapper_image>
          );
        })}
      </Styled.Carousel_wrape>
    </Styled.Wrapper_container>
  );
};
