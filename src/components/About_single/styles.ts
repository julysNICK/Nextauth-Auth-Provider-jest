import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css``}
`;
export const Wrapper_details = styled.div`
  ${({ theme }) =>
    css`
      display: flex;
      flex-direction: column;
      gap: 1rem;
    `}
`;
export const Sections_name = styled.h1`
  ${({ theme }) =>
    css`
      text-align: center;
      color: #fff;
      text-decoration: underline;
    `}
`;
export const Details_movie = styled.span`
  ${({ theme }) =>
    css`
      color: #fff;
      font-size: 2rem;
      word-spacing: 0.2rem;
    `}
`;
export const Paragraph_single = styled.p`
  ${({ theme }) =>
    css`
      color: #fff;
      font-size: 2rem;
      word-spacing: 0.2rem;
    `}
`;
