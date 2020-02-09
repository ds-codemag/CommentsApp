import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CommentsList from '../presentational/CommentsList';

const ChoosedCommentsList = ({ comments }) => {
  return comments.length ? <CommentsList comments={comments} /> : <h2 className="h5 text-center mt-5">Brak komentarzy</h2>;
};

ChoosedCommentsList.propTypes = {
  comments: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  comments: state.choosedComments
});

export default connect(mapStateToProps)(ChoosedCommentsList);
