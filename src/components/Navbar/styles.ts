import Link from 'next/link';
import styled, { css } from 'styled-components';
type MenuVisible = {
  visible?: boolean;
};
const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`;
export const Wrapper = styled.nav<MenuVisible>`
  ${({ theme, visible }) => css`
    display: flex;

    background: #1a2930;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
    height: 80px;

    transition: all 300ms ease-in-out;
    @media (max-width: 1055px) {
      position: fixed;
      z-index: 100;
      flex-direction: column;
      justify-content: center;
      visibility: hidden;
      opacity: 0;
      ${visible && menuVisible()}
      align-items: center;
      flex-direction: column;

      gap: 2rem;
      height: 100vh;
      width: 100%;

      ${link_logo_name}, ${Wrapper_Logo},${Listalllinks},${search} {
        margin: 0;
      }
    }
  `}
`;

export const Listalllinks = styled.ul`
  ${({ theme }) => css`
    justify-self: flex-end;
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 0.5rem;
    list-style: none;
    width: 40vw;
    margin-left: 13rem;
    @media (max-width: 1055px) {
      display: flex;
      justify-content: space-between;
      gap: 2.3rem;
      align-items: center;
      flex-direction: column;
    }
  `}
`;

export const Listindink = styled.li`
  ${({ theme }) => css``}
`;
export const Wrapper_Logo = styled.div`
  ${({ theme }) => css``}
`;
export const Button_close_open = styled.button<MenuVisible>`
  ${({ theme, visible }) => css`
    width: 4rem;
    height: 4rem;

    display: none;
    @media (max-width: 1055px) {
      display: flex;
      position: fixed;
      align-items: center;
      justify-content: center;

  `}
`;

export const link_name = styled.a`
  ${({ theme }) =>
    css`
      display: block;
      text-decoration: none;
      padding: 14px 16px;
      color: #c5c1c0;
      ${theme.font.sizes.small};
      font-size: 1.7rem;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: 0.76rem;
        left: 40%;
        width: 0;
        height: 0.2rem;
        background: #f7ce3e;
        transition: all 300ms ease-in-out;
      }
      &:hover::after {
        left: 10%;
        width: 30%;
      }
      @media (max-width: 1055px) {
        &:hover::after {
          left: 20%;
          width: 60%;
        }
      }
    `}
`;
export const link_logo_name = styled.a`
  ${({ theme }) =>
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      color: #c5c1c0;
      text-decoration: none;
      left: 0;
      margin-right: 25rem;
      font-size: 1.7rem;
      padding: 14px 16px;
    `}
`;
export const search = styled.input`
  ${({ theme }) =>
    css`
      margin-left: 10rem;
      border: 2px solid;
      border-radius: 25.5px;
      padding: 6px;
      font-size: 17px;
    `}
`;
