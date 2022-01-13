import React from 'react';
import { useHistory } from 'react-router-dom';

export const useGoBack = () => {
  const history = useHistory();
  return history.goBack;
};
