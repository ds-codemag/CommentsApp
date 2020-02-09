import React from 'react';
import { Container } from 'react-bootstrap';

import FetchedCommentsList from '../components/containers/FetchedCommentsList';

const Home = () => (
  <Container>
    <FetchedCommentsList />
  </Container>
);

export default Home;
