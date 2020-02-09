import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../store/comments/actions';
import AddCommentForm from '../presentational/AddCommentForm';

const AddCommentFormContainer = ({ fetchedComments, addComment }) => {

  const [validated, setValidated] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [formValues, setFormValues] = React.useState({ name: '', email: '', body: '' });

  React.useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 1500)
    }
  }, [showAlert]);

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (form.checkValidity() === true) {

      const id = Math.max(...fetchedComments.map(fetchedComment => fetchedComment.id), 0) + 1;
      addComment({ id, ...formValues }, fetchedComments);
      setFormValues({ name: '', email: '', body: '' });
      setValidated(false);
      setShowAlert(true);

    } else {

      setValidated(true);

    }
  };

  return <AddCommentForm formValues={formValues} setFormValues={setFormValues} isValid={validated} handleSubmit={handleSubmit} showAlert={showAlert} />;
};

AddCommentFormContainer.propTypes = {
  fetchedComments: PropTypes.array.isRequired,
  addComment: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  fetchedComments: state.fetchedComments
});

const mapDispatchToProps = {
  addComment
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentFormContainer);
