import { PROFILE_USER, FIND_TEACHERS, TEACHERS_FULLMATCH, TEACHERS_FROMSEARCH } from './types';

const profileUserAC = user => {
  return {
    type: PROFILE_USER,
    user: user,
  };
};

const teachersInStateAC = teachers => {
  return {
    type: FIND_TEACHERS,
    teachers: teachers,
  };
};

const teachersFullMatchAC = teachersFull => {
  return {
    type: TEACHERS_FULLMATCH,
    teachersFull: teachersFull,
  };
};

const teachersInStoreFromSearchAC = teachersFromSearch => {
  return {
    type: TEACHERS_FROMSEARCH,
    teachersFromSearch: teachersFromSearch,
  };
};

export { profileUserAC, teachersInStateAC, teachersFullMatchAC, teachersInStoreFromSearchAC };
