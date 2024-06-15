import React, { createContext, useContext, useReducer, ReactNode } from 'react';

type State = {
  state: string;
  lga: string;
  ward: string;
  pollingUnit: string;
};

type Action = 
  | { type: 'SET_STATE'; payload: string }
  | { type: 'SET_LGA'; payload: string }
  | { type: 'SET_WARD'; payload: string }
  | { type: 'SET_POLLING_UNIT'; payload: string };

const initialState: State = {
  state: '',
  lga: '',
  ward: '',
  pollingUnit: '',
};

const GlobalStateContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

const globalStateReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_STATE':
      return { ...state, state: action.payload, lga: '', ward: '', pollingUnit: '' };
    case 'SET_LGA':
      return { ...state, lga: action.payload, ward: '', pollingUnit: '' };
    case 'SET_WARD':
      return { ...state, ward: action.payload, pollingUnit: '' };
    case 'SET_POLLING_UNIT':
      return { ...state, pollingUnit: action.payload };
    default:
      return state;
  }
};

type GlobalStateProviderProps = {
  children: ReactNode;
};

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(globalStateReducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
