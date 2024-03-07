import * as Interfaces from '../../configs/ts/interfaces';
import * as ReduxTypes from '../rootTypes';

// Other Reducer

const otherReducerState: Interfaces.OtherReducerStateInterface = {
  fetchingStatus: false,
};

const OtherReducer = (
  state: Interfaces.OtherReducerStateInterface = otherReducerState,
  action: Interfaces.ActionsInterface,
): Interfaces.OtherReducerStateInterface => {
  switch (action.type) {
    case ReduxTypes.LOADING_STATUS:
      return {...state, fetchingStatus: action.payload};

    default:
      return state;
  }
};

export default OtherReducer;
