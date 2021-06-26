import Carousel from 'nuka-carousel';
import styled, { css } from 'styled-components';
type SliderVisible = {
  Active?: boolean;
};

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 30vw;
    height: 40vh;

    margin: 0 auto;
  `}
`;

export const Title_single = styled.h1`
  color: #fff;
  margin: 0;
  word-wrap: break-word;
`;
export const Image = styled.img<SliderVisible>`
  image-rendering: pixelated;
  object-fit: contain;

  object-fit: contain;
`;
export const Carousel_wrape = styled(Carousel)`
  ${({ theme }) => css``}
`;
