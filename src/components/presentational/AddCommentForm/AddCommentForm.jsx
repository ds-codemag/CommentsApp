import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Alert } from 'react-bootstrap';
import { StyledAddCommentForm } from './AddCommentForm.styled';

const AddCommentForm = ({ formValues, setFormValues, isValid, handleSubmit, showAlert }) => {

  const handleChange = (event) => {
    const letters = /^[A-Za-z\s]+$/;
    const alphanumeric = /^[A-Za-z0-9\s]+$/;
    switch (event.currentTarget.name) {
      case 'name':
        if (!event.currentTarget.value || letters.test(event.currentTarget.value)) {
          setFormValues({
            ...formValues,
            name: event.currentTarget.value
          })
        }
        break;
      case 'body':
        if (!event.currentTarget.value || alphanumeric.test(event.currentTarget.value)) {
          setFormValues({
            ...formValues,
            body: event.currentTarget.value
          })
        }
        break;
      default:
        setFormValues({
          ...formValues,
          [event.currentTarget.name]: event.currentTarget.value
        })
    }
  };

  return (
    <StyledAddCommentForm>
      <Alert show={showAlert} variant="success">
        Dodano komentarz
      </Alert>
      <Form noValidate={true} validated={isValid} onSubmit={handleSubmit}>

        <Form.Group controlId="add-comment-form-validation1">
          <Form.Label>Nazwa</Form.Label>
          <Form.Control type="text" name="name" required={true} minLength={3} value={formValues.name} onChange={handleChange} />
          <Form.Control.Feedback type="invalid">
            Wpisz conajmniej 3 znaki
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="add-comment-form-validation2" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" required={true} value={formValues.email} onChange={handleChange} />
          <Form.Control.Feedback type="invalid" >
            Wpisz poprawny adres email
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="add-comment-form-validation3">
          <Form.Label>Komentarz</Form.Label>
          <Form.Control as="textarea" name="body" rows="3" required={true} minLength={2} value={formValues.body} onChange={handleChange} />
          <Form.Control.Feedback type="invalid">
            Wpisz conajmniej 2 znaki
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" variant="secondary">Dodaj komentarz</Button>

      </Form>
    </StyledAddCommentForm>
  );
}

AddCommentForm.propTypes = {
  formValues: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  showAlert: PropTypes.bool.isRequired
};

export default AddCommentForm;
