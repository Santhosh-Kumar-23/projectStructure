import * as Interfaces from '../../configs/ts/interfaces';
import * as ReduxTypes from '../rootTypes';

// App Actions

export const clearReduxStates = (): Pick<
  Interfaces.ActionsInterface,
  'type'
> => {
  return {
    type: ReduxTypes.LOGOUT,
  };
};
