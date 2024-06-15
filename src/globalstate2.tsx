import React, { createContext, useContext, useReducer, ReactNode } from 'react';

type State = {
  selectedState: string;
  selectedLGA: string;
  selectedWard: string;
  selectedPU: string;
  selectedPosition: string;
  selectedParty: string;
  resultsFile: File | null;
  uploadStatus: 'idle' | 'uploading' | 'success';
  uploadMessage: string;
};

type Action =
  | { type: 'SET_STATE'; payload: string }
  | { type: 'SET_LGA'; payload: string }
  | { type: 'SET_WARD'; payload: string }
  | { type: 'SET_PU'; payload: string }
  | { type: 'SET_POSITION'; payload: string }
  | { type: 'SET_PARTY'; payload: string }
  | { type: 'SET_RESULTS_FILE'; payload: File }
  | { type: 'SET_UPLOAD_STATUS'; payload: 'idle' | 'uploading' | 'success' }
  | { type: 'SET_UPLOAD_MESSAGE'; payload: string };

const initialState: State = {
  selectedState: '',
  selectedLGA: '',
  selectedWard: '',
  selectedPU: '',
  selectedPosition: '',
  selectedParty: '',
  resultsFile: null,
  uploadStatus: 'idle',
  uploadMessage: '',
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
      return { ...state, selectedState: action.payload, selectedLGA: '', selectedWard: '', selectedPU: '' };
    case 'SET_LGA':
      return { ...state, selectedLGA: action.payload, selectedWard: '', selectedPU: '' };
    case 'SET_WARD':
      return { ...state, selectedWard: action.payload, selectedPU: '' };
    case 'SET_PU':
      return { ...state, selectedPU: action.payload };
    case 'SET_POSITION':
      return { ...state, selectedPosition: action.payload };
    case 'SET_PARTY':
      return { ...state, selectedParty: action.payload };
    case 'SET_RESULTS_FILE':
      return { ...state, resultsFile: action.payload };
    case 'SET_UPLOAD_STATUS':
      return { ...state, uploadStatus: action.payload };
    case 'SET_UPLOAD_MESSAGE':
      return { ...state, uploadMessage: action.payload };
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
