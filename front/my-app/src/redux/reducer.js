import { PROFILE_USER, FIND_TEACHERS, TEACHERS_FULLMATCH } from './types';

const initialState = {
  user: '',
  teachers: [],
  teachersFull: [],
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

    default:
      return state;
  }
}
