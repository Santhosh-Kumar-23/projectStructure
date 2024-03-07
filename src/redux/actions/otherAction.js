import RequestService from '../../api/Service';
import * as ReduxTypes from '../rootTypes';

export const storeAPIFetchingStatus = fetchingStatus => {
  return {
    type: ReduxTypes.LOADING_STATUS,
    payload: fetchingStatus,
  };
};

export const fetchPosts = onResponse => {
  return dispatch => {
    RequestService.get(
      'https://jsonplaceholder.typicode.com/posts',
      null,
      response => {
        onResponse(response);
      },
      true,
    );
  };
};
