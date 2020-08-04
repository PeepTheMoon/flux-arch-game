import React, { useContext } from 'react';

export const Context = React.createContext();

export const useState = () => {
  const { state } = useContext(Context);
  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(Context);
  return dispatch;
};

