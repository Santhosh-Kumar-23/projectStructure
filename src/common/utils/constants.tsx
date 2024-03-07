import {
  ColorSchemeName,
  ImageResizeMode,
  PlatformOSType,
  StatusBarStyle,
} from 'react-native';
import {MessageType, Position} from 'react-native-flash-message';
import * as Types from '../../configs/ts/types';

// Errors
export const COMMON_ERROR: string =
  'Sorry! Something went wrong! Please, try again later!';

// Methods
export const DELETE_METHOD: Types.APIMethodType = 'DELETE';
export const GET_METHOD: Types.APIMethodType = 'GET';
export const PATCH_METHOD: Types.APIMethodType = 'PATCH';
export const POST_METHOD: Types.APIMethodType = 'POST';
export const PUT_METHOD: Types.APIMethodType = 'PUT';

// Numerics
export const FLASH_MESSAGE_DURATION: number = 2500;
export const ONE: number = 1;
export const SET_TIMEOUT_2500: number = 2500;
export const SIXTEEN: number = 16;
export const THREE: number = 3;
export const ZERO: number = 0;

// Screens
export const ONBOARDINGS: string = 'OnBoardings';
export const SPLASH: string = 'Splash';

// Strings
export const BACK: string = 'Back';
export const DECREMENT: string = 'decrement';
export const DEVELOPMENT: string = 'development';
export const ERROR: string = 'Error';
export const EXIT_APP: string = 'Press back again to exit ABFFIT app!';
export const INCREMENT: string = 'increment';
export const NEXT: string = 'Next';
export const SKIP: string = 'Skip';
export const SUCCESS_STR: string = 'Success';

// !Strings
export const ANDROID: PlatformOSType = 'android';
export const BOTTOM: Position = 'bottom';
export const CONTAIN: ImageResizeMode = 'contain';
export const DANGER: MessageType = 'danger';
export const DARK: ColorSchemeName = 'dark';
export const DARK_CONTENT: StatusBarStyle = 'dark-content';
export const DEFAULT: MessageType = 'default';
export const ELEVATED: Types.PaperButtonModeType = 'elevated';
export const IOS: PlatformOSType = 'ios';
export const LIGHT: ColorSchemeName = 'light';
export const LIGHT_CONTENT: StatusBarStyle = 'light-content';
export const SUCCESS: MessageType = 'success';
export const TOP: Position = 'top';

// Success
export const COMMON_SUCCESS: string =
  'Data create / retrieve / update successful!';
