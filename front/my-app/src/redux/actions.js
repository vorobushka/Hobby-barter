import { PROFILE_USER, FIND_TEACHERS, TEACHERS_FULLMATCH } from './types';

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
    teachersFullMatch: teachersFull,
  };
};

export { profileUserAC, teachersInStateAC, teachersFullMatchAC };
