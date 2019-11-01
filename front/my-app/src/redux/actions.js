import { PROFILE_USER } from './types';

const profileUserAC = user => {
  return {
    type: PROFILE_USER,
    user: user,
  };
};

export { profileUserAC };
