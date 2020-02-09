import React from 'react';
import PropTypes from 'prop-types';
import { Col, Alert } from 'react-bootstrap';
import CommentCardContainer from '../../containers/CommentCardContainer';
import { StyledCommentsList } from './CommentsList.styled';

const CommentsList = ({ comments }) => {

  const [showAlert, setShowAlert] = React.useState(false);

  React.useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 1500)
    }
  }, [showAlert])

  return (
    <StyledCommentsList className="align-items-stretch">
      <Alert show={showAlert} variant="danger">
        Nie można wybrać tego komentarza ponieważ został już wybrany.
      </Alert>
      {
        comments.map(comment => (
          <Col className="comment" key={comment.id} xs={12} sm={6} lg={4}>
            <CommentCardContainer comment={comment} setShowAlert={setShowAlert} />
          </Col>
        ))
      }
    </StyledCommentsList>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentsList;
