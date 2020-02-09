export const fetchedCommentsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_COMMENTS':
      return [ ...action.comments ];
    case 'ADD_COMMENT':
      return [ ...action.comments, action.newComment ]
    default:
      return state;
  }
};

export const choosedCommentsReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHOOSE_COMMENT':
      return [ ...action.comments ];
    case 'REMOVE_COMMENT':
      return [ ...action.comments.filter(comment => comment.id !== action.id) ];
    default:
      return state;
  }
};
