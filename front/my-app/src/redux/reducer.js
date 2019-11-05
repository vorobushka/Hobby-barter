import { PROFILE_USER, FIND_TEACHERS } from './types';

const initialState = {
  user: '',
  teachers: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_USER: {
      return {
        ...state,
        user: action.user,
      };
    }
    case FIND_TEACHERS: {
      return {
        ...state,
        teachers: action.teachers,
      };
    }
    default:
      return state;
  }
}
