// #redux step6

import { actionsTypeGeneral } from './actionsType';

export const SET_USER_INFO = (payload) => {
  return { type: actionsTypeGeneral.SET_USER_INFO, payload };
};

export const SET_MODALS = (payload) => {
  // #modalRedux step2
  return {
    type: actionsTypeGeneral.SET_MODALS,
    payload,
  };
};
