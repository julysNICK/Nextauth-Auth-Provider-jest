import styled, { css } from 'styled-components';

import { ChevronLeft, ChevronRight } from '@styled-icons/boxicons-regular';
type SliderVisible = {
  Active?: boolean;
  lenght?: number;
};

export const Wrapper = styled.div<SliderVisible>`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    display: flex;
    margin-top: 20rem;
    position: absolute;
    width: 320rem;
    overflow: hidden;
  `}
`;

export const Wrapper_image = styled.div<SliderVisible>`
  ${({ theme, lenght }) =>
    css`
      transform: translateX(${lenght === 0 ? 0 : lenght}%);
      transition: all 0.5s ease;
      overflow: hidden;
    `}
`;

export const Image_slider = styled.img`
  ${({ theme }) => css`
    position: relative;
    width: 50rem;
    height: 200px;
    border-radius: 10px;
  `}
`;

export const ArrowLeft = styled(ChevronLeft)`
  ${({ theme }) => css`
    height: 12rem;
    position: absolute;
    top: 50%;
    left: 0px;
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
    right: 0px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
  `}
`;
