import styled, { css } from 'styled-components';
import Carousel from 'nuka-carousel';
import { ChevronLeft, ChevronRight } from '@styled-icons/boxicons-regular';
type SliderVisible = {
  Active?: boolean;
  lenght?: number;
};

export const Wrapper_container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const Wrapper_span = styled.div`
  display: flex;
  z-index: 6;
  position: absolute;
  align-self: flex-start;
  top: -1px;
  left: 1%;
`;
export const span = styled.span`
  color: #fff;
  font-size: 1.8rem;
`;
export const Wrapper_image = styled.div<SliderVisible>`
  position: relative;
  width: 50rem;
  height: 50rem;
  transition: all 0.5s ease;
`;

export const Image_slider = styled.img`
  border-radius: 10px;
`;
export const Carousel_wrape = styled(Carousel)`
  ${({ theme }) => css`
    position: absolute;
    margin-top: 2rem;
    .styles__Wrapper_image-sc-1lfhcjf-3 {
      height: 39rem;
      width: 23rem;
    }
    .slider-slide {
    }
  `}
`;
export const ArrowLeft = styled(ChevronLeft)`
  height: 12rem;

  top: 50%;
  left: 0px;
  font-size: 3rem;
  color: #fff;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export const ArrowRight = styled(ChevronRight)`
  height: 12rem;

  top: 50%;
  right: 0px;
  font-size: 3rem;
  color: #fff;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  &:disabled {
    color: blue;
  }
`;
