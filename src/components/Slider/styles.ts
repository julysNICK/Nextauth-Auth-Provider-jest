import styled, { css } from 'styled-components';

import { ChevronLeft, ChevronRight } from '@styled-icons/boxicons-regular';
type SliderVisible = {
  Active?: boolean;
};
const SliderActive = () => css`
  opacity: 1;
  transition-duration: 1s;
  transform: scale(1.08);
`;
export const Wrapper = styled.div`
  ${({ theme }) =>
    css`
      display: flex;
      position: relative;
      height: 100vh;
      justify-content: center;
      align-items: center;
    `}
`;

export const Wrapper_image = styled.div<SliderVisible>`
  ${({ theme, Active }) => css`
    opacity: 0;
    transition-duration: 1s ease;
    ${Active && SliderActive()}
  `}
`;

export const Image_slider = styled.img`
  ${({ theme }) => css`
    width: 1000px;
    height: 600px;
    border-radius: 10px;
  `}
`;

export const ArrowLeft = styled(ChevronLeft)`
  ${({ theme }) => css`
    height: 12rem;
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  `}
`;

export const ArrowRight = styled(ChevronRight)`
  ${({ theme }) => css`
    width: 10rem;
    position: absolute;
    top: 50%;
    right: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  `}
`;
