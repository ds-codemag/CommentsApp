import React from 'react';
import PropTypes from 'prop-types';
import { StyledLayout } from './Layout.styled';
import Header from '../Header';

const Layout = ({ children }) => (
  <StyledLayout>
    <Header />
    <main>
      {children}
    </main>
  </StyledLayout>
);

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
