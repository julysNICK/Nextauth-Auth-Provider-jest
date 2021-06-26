import { useEffect, useState } from 'react';
import { ImageProps } from '../Slider';
import * as Styled from './styles';

export type Main_section_singleProps = {
  slides: ImageProps[];
};

export const Main_section_single = ({ slides }: Main_section_singleProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Carousel_wrape
        renderCenterLeftControls={null}
        renderBottomCenterControls={null}
        renderCenterRightControls={null}
        wrapAround={true}
        autoplay={true}
      >
        {slides?.map((slide, index) => {
          return (
            <Styled.Image
              key={index}
              src={`https://image.tmdb.org/t/p/w500${slide.image}`}
            />
          );
        })}
      </Styled.Carousel_wrape>
    </Styled.Wrapper>
  );
};
