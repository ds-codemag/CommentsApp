import React from 'react';
import PropTypes from 'prop-types';
import { chooseComment, removeComment } from '../../store/comments/actions';
import { connect } from 'react-redux';
import CommentCard from '../presentational/CommentCard';

const CommentCardContainer = ({ comment, choosedComments, chooseComment, removeComment, setShowAlert}) => {

  const save = () => {
    if (!choosedComments.some(choosedComment => choosedComment.id === comment.id)) {
      chooseComment([...choosedComments, {
        ...comment,
        saved: true
      }]);
    } else { setShowAlert(true) }
  };

  const remove = () => {
    removeComment(comment.id, choosedComments);
  };

  return <CommentCard {...comment} handleSave={save} handleRemove={remove} />;
};

CommentCardContainer.propTypes = {
  comment: PropTypes.object.isRequired,
  choosedComments: PropTypes.array.isRequired,
  chooseComment: PropTypes.func.isRequired,
  removeComment: PropTypes.func.isRequired,
  setShowAlert: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  choosedComments: state.choosedComments
});

const mapDispatchToProps = {
  chooseComment,
  removeComment
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentCardContainer);
