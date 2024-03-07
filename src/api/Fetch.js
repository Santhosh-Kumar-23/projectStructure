import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';
import * as Constants from '../common/utils/constants';
import * as HelperNavigation from '../common/utils/helperNavigation';
import * as Enums from '../configs/ts/enums';
import * as Actions from '../redux/rootAction';
import Store from '../redux/store';

class HandleFetchRequest {
  handleFetchRequest(endPoint, headers, onResponse, showFlashMessage) {
    fetch(endPoint, headers)
      .then(res => handleResponse(res))
      .then(successResponse => {
        handleSuccessResponse(successResponse, onResponse, showFlashMessage);
      })
      .catch(() => {
        showMessage({
          description: Constants.COMMON_ERROR,
          icon: 'auto',
          message: Constants.ERROR,
          type: Constants.DANGER,
        });
      })
      .finally(() => {
        Store.dispatch(Actions.storeAPIFetchingStatus(false));
      });
  }
}

const handleResponse = async response => {
  const {StatusCodes} = Enums;
  const {status} = response;
  const resJson = await response.json();
  if (status == StatusCodes.Unauthorized) {
    backToOnboard();
    return true;
  } else {
    return Promise.all([status, resJson]).then(res => ({
      statusCode: res[Constants.ZERO],
      resJson: res[Constants.ONE],
    }));
  }
};

const backToOnboard = async () => {
  const resetAction = CommonActions.reset({
    index: Constants.ZERO,
    routes: [{name: Constants.SPLASH}],
  });
  const keys = await AsyncStorage.getAllKeys();
  await AsyncStorage.multiRemove(keys);
  Store.dispatch(Actions.clearReduxStates());
  HelperNavigation.navigateDispatch(resetAction);
};

const handleSuccessResponse = (
  successResponse,
  onResponse,
  showFlashMessage,
) => {
  const {StatusCodes} = Enums;
  const {statusCode} = successResponse;
  if (statusCode == StatusCodes.Success || statusCode == StatusCodes.New) {
    showFlashMessage &&
      showMessage({
        description: Constants.COMMON_SUCCESS,
        icon: 'auto',
        message: Constants.SUCCESS_STR,
        type: Constants.SUCCESS,
      });
    onResponse(successResponse);
  } else {
    showMessage({
      description: Constants.COMMON_ERROR,
      icon: 'auto',
      message: Constants.ERROR,
      type: Constants.DANGER,
    });
  }
};

const FetchRequest = new HandleFetchRequest();
export default FetchRequest;
