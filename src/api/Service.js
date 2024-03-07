const AsyncStorage = require('@react-native-async-storage/async-storage');
const ENV = require('../../env');
const Constants = require('../common/utils/constants');
const Interfaces = require('../configs/ts/interfaces');
const Types = require('../configs/ts/types');
const Fetch = require('./Fetch');

class HandleRequestService {
  async handleRequestHeaders(
    methodType,
    endPoint,
    requestData,
    onResponse,
    showFlashMessage,
  ) {
    const jwtToken = await AsyncStorage.getItem('token');
    let requestHeader = {
      method: methodType,
      headers: {
        Accept: '*/*',
        'Content-Type':
          requestData instanceof FormData
            ? 'multipart/form-data'
            : 'application/json',
        Authorization: 'Bearer ' + jwtToken,
      },
    };
    if (requestData) {
      requestHeader.body =
        requestData instanceof FormData
          ? requestData
          : JSON.stringify(requestData);
    }
    Fetch.handleFetchRequest(
      `${ENV.baseURL}${endPoint}`,
      requestHeader,
      onResponse,
      showFlashMessage,
    );
  }

  delete(endPoint, onResponse, showFlashMessage) {
    this.handleRequestHeaders(
      Constants.DELETE_METHOD,
      endPoint,
      null,
      onResponse,
      showFlashMessage,
    );
  }

  get(endPoint, requestData, onResponse, showFlashMessage) {
    this.handleRequestHeaders(
      Constants.GET_METHOD,
      endPoint,
      requestData,
      onResponse,
      showFlashMessage,
    );
  }

  patch(endPoint, requestData, onResponse, showFlashMessage) {
    this.handleRequestHeaders(
      Constants.PATCH_METHOD,
      endPoint,
      requestData,
      onResponse,
      showFlashMessage,
    );
  }

  post(endPoint, requestData, onResponse, showFlashMessage) {
    this.handleRequestHeaders(
      Constants.POST_METHOD,
      endPoint,
      requestData,
      onResponse,
      showFlashMessage,
    );
  }

  put(endPoint, requestData, onResponse, showFlashMessage) {
    this.handleRequestHeaders(
      Constants.PUT_METHOD,
      endPoint,
      requestData,
      onResponse,
      showFlashMessage,
    );
  }
}

const RequestService = new HandleRequestService();
module.exports = RequestService;
