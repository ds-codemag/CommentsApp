import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { StyledCommentCard } from './CommentCard.styled';
import { CapitalizeFirstLetter } from '../../../utils/helpers';

const CommentCard = ({
  name,
  email,
  body,
  saved,
  handleRemove,
  handleSave
}) => (
  <StyledCommentCard>
    <Card>
      <Card.Body>
        <Card.Title>{CapitalizeFirstLetter(name)}</Card.Title>
        <Card.Subtitle className="text-muted">{email}</Card.Subtitle>
        <Card.Text>
          {CapitalizeFirstLetter(body).substring(0, 20)}{body.length > 20 ? '...' : ''}
        </Card.Text>
        {
          saved ?
            <Button variant="secondary" onClick={handleRemove}>Usuń</Button> :
            <Button variant="secondary" onClick={handleSave}>Wybierz komentarz</Button>
        }
      </Card.Body>
    </Card>
  </StyledCommentCard>
);

CommentCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  saved: PropTypes.bool,
  handleRemove: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
};

export default CommentCard;
