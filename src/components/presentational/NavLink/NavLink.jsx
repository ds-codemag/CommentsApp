import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import { StyledNavLink } from './NavLink.styled';

const NavLink = ({ to, children}) => {

  const location = useLocation();
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    location.pathname === to ? setIsActive(true) : setIsActive(false);
  }, [location, to, setIsActive]);

  return (
    <StyledNavLink to={to} className={`nav-link ${isActive && 'active'}`}>
      {children}
    </StyledNavLink>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default NavLink;
