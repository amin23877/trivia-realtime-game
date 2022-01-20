// #redux step6

import { actionsTypeGeneral } from './actionsType';

export const SET_USER_INFO = (payload) => {
  return { type: actionsTypeGeneral.SET_USER_INFO, payload };
};
