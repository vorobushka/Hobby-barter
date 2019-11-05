import { PROFILE_USER, FIND_TEACHERS } from './types';

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

export { profileUserAC, teachersInStateAC };
