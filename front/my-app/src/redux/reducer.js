import { PROFILE_USER, FIND_TEACHERS, TEACHERS_FULLMATCH, TEACHERS_FROMSEARCH } from './types';

const initialState = {
  user: '',
  teachers: [],
  teachersFull: [],
  teachersFromSearch: [],
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
    case TEACHERS_FULLMATCH: {
      return {
        ...state,
        teachersFull: action.teachersFull,
      };
    }
    case TEACHERS_FROMSEARCH: {
      return {
        ...state,
        teachersFromSearch: action.teachersFromSearch,
      };
    }
    default:
      return state;
  }
}
