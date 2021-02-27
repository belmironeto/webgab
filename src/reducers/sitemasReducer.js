import { GET_ALL_SYSTEMS, GET_SYSTEM_BY_TAG } from '../actions/sistemasActions';

const INITIAL_STATE = {
  sistemas: [
    {
      name: '',
      url: '',
      description: '',
      divisao: '',
      environment: [],
      tags: [],
    },
  ],
};

const sistemasReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_SYSTEMS:
      return {
        ...state,
        sistemas: action.payload.sistemas,
      };
    case GET_SYSTEM_BY_TAG:
      return {
        ...state,
        sistemas: action.payload.sistemas,
      };
    default:
      return state;
  }
};

export default sistemasReducer;
