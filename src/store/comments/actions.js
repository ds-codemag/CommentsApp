export const fetchComments = (comments) => ({
  type: 'FETCH_COMMENTS',
  comments
});

export const addComment = (newComment, comments) => ({
  type: 'ADD_COMMENT',
  newComment,
  comments
});

export const chooseComment = (comments) => ({
  type: 'CHOOSE_COMMENT',
  comments
});

export const removeComment = (id, comments) => ({
  type: 'REMOVE_COMMENT',
  id,
  comments
});
