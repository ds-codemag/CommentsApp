import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { StyledHeader } from './Header.styled';
import NavLink from '../NavLink';

const Header = () => (
  <StyledHeader>
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Toggle className="d-md-none d-block ml-auto" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <NavLink to="/">Strona główna</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/comments">Wybrane komentarze</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/add-comment">Dodaj komentarz</NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </StyledHeader>
);

export default Header;
