import { PROFILE_USER } from './types';

const initialState = {
  user: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_USER: {
      return {
        ...state,
        user: action.user,
      };
    }

    default:
      return state;
  }
}
