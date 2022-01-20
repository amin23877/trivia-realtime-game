import { actionsTypeGeneral } from 'redux/actions/mainActions/actionsType';

// #redux step4
const initialState = {
  userInfo: {},
};
export const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypeGeneral.SET_USER_INFO:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};
