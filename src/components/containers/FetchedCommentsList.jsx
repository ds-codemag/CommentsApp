import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CommentsList from '../presentational/CommentsList';

const FetchedCommentsList = ({ comments }) => {

  return <CommentsList comments={comments} />;
};

FetchedCommentsList.propTypes = {
  comments: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  comments: state.fetchedComments
});

export default connect(mapStateToProps)(FetchedCommentsList);
