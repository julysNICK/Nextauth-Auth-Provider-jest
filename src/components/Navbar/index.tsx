import * as Styled from './styles';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useState } from 'react';

export const Navbar = () => {
  const [visible, setvisible] = useState(false);
  const [session] = useSession();
  return (
    <>
      <Styled.Button_close_open
        visible={visible}
        onClick={() => setvisible(!visible)}
        aria-label="Open/Close menu"
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Styled.Button_close_open>
      <Styled.Wrapper visible={visible}>
        <Styled.Wrapper_Logo
          onClick={() => setvisible(false)}
          aria-label="LogoArea"
        >
          <Link href="#">
            <Styled.link_logo_name href="#">Watchit</Styled.link_logo_name>
          </Link>
        </Styled.Wrapper_Logo>
        <Styled.search type="text" />
        <Styled.Listalllinks onClick={() => setvisible(false)}>
          <Styled.Listindink>
            <Styled.link_name href="#">About</Styled.link_name>
          </Styled.Listindink>
          <Styled.Listindink>
            {!session ? (
              <Styled.link_name href="#" onClick={() => signIn('auth0')}>
                Login
              </Styled.link_name>
            ) : (
              <Styled.link_name href="#" onClick={() => signOut()}>
                Logout
              </Styled.link_name>
            )}
          </Styled.Listindink>
          <Styled.Listindink>
            <Styled.link_name href="#">Help</Styled.link_name>
          </Styled.Listindink>
          <Styled.Listindink>
            <Styled.link_name href="#">Help</Styled.link_name>
          </Styled.Listindink>
        </Styled.Listalllinks>
      </Styled.Wrapper>
    </>
  );
};
