import * as Interfaces from '../../configs/ts/interfaces';
import * as ReduxTypes from '../rootTypes';

// App Reducer

const appReducerState: Interfaces.AppReducerStateInterface = {
  userData: {},
};

const AppReducer = (
  state: Interfaces.AppReducerStateInterface = appReducerState,
  action: Interfaces.ActionsInterface,
): Interfaces.AppReducerStateInterface => {
  switch (action.type) {
    case ReduxTypes.USER_DATA:
      return {...state, userData: {...state.userData, ...action.payload}};

    default:
      return state;
  }
};

export default AppReducer;
