import styled, { css } from 'styled-components';
import Link from 'next/link';
type colorLevel = {
  color: string;
};
export const Wrapper = styled.div`
  ${({ theme }) =>
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      margin: 10px;
      padding: 0.2rem;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.9);

      width: 30rem;
      max-height: 300px;
      min-width: 100px;
      z-index: 1;
      &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.9);
      }
    `}
`;

export const Wrapper_avaliation = styled.div`
  ${({ theme }) =>
    css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-right: 15rem;
    `}
`;
export const Title = styled.h4`
  ${({ theme }) => css`
    margin: 0;
    color: rgb(255, 255, 255);
  `}
`;
export const Avaliation = styled.p`
  ${({ theme }) =>
    css`
      margin: 1rem 0 0 0;
      color: rgb(255, 255, 255);
    `}
`;

export const Title_link = styled.a`
  text-decoration: none;
  color: rgb(255, 255, 255);
`;

export const Image_card = styled.img`
  image-rendering: pixelated;
  max-height: 200px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 15px;
`;
export const LINK_NEXT = styled(Link)`
  ${({ color }) =>
    css`
      text-decoration: none;
      color: rgb(255, 255, 255);
    `}
`;
