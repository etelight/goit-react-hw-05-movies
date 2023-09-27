import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  NavList,
  NavLinkHeader,
  Nav,
  NavBtn,
} from './Layout-styled';

export const Layout = () => {
  return (
    <Container>
      <Nav>
        <header>
          <NavList>
            <li>
              <NavLinkHeader to="/">
                <NavBtn>HOME</NavBtn>
              </NavLinkHeader>
            </li>
            <li>
              <NavLinkHeader to="/movies">
                <NavBtn>MOVIES</NavBtn>
              </NavLinkHeader>
            </li>
          </NavList>
        </header>
      </Nav>
      <main>
        <Suspense fallback={<div>Loadind...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
