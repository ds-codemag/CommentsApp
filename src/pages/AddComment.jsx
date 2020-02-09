import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';

import AddCommentFormContainer from '../components/containers/AddCommentFormContainer';

const AddComment = () => (
  <Container>
    <Navbar className="mb-5" bg="light">
      <Link to="/" className="position-absolute">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" /></svg>
      </Link>

      <Navbar.Text className="mx-auto">
        <strong>Dodaj komentarz</strong>
      </Navbar.Text>
    </Navbar>
    <AddCommentFormContainer />
  </Container>
);

export default AddComment;
