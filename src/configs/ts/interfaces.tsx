import * as Types from './types';

export interface ActionsInterface extends Types.KeyStrValAllType {
  payload: any;
  type: string;
}

export interface APIRequestHeaderInterface extends Types.KeyStrValAllType {
  method: Types.APIMethodType;
  headers: {
    Accept: string;
    'Content-Type': string;
    Authorization: string;
  };
  body?: any;
}

export interface APIResponseHandlerInterface extends Types.KeyStrValAllType {
  (response: APIResponseInterface | true): void;
}

export interface APIResponseInterface extends Types.KeyStrValAllType {
  statusCode: number;
  resJson: any;
}

export interface AppReducerStateInterface extends Types.KeyStrValAllType {
  userData: object;
}

export interface OnBoardDataInterface extends Types.KeyStrValStrType {
  title: string;
  content: string;
}

export interface OtherReducerStateInterface extends Types.KeyStrValAllType {
  fetchingStatus: boolean;
}

export interface RootReducersStateInterface extends Types.KeyStrValAllType {
  app: AppReducerStateInterface;
  other: OtherReducerStateInterface;
}
