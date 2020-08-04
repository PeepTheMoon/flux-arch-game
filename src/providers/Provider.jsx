import React from 'react';
import { Context } from '../hooks/Context';
import { useReducer } from 'react';
import reducer, { initialState } from '../reducers/Reducer';

// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
