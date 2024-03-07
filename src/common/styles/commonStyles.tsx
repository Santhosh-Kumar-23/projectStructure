import {StyleSheet, TextStyle} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import * as Types from '../../configs/ts/types';

// Common Styles
export const CommonStyles = StyleSheet.create({
  screenCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenSubContainer: {
    flex: 1,
    paddingHorizontal: RFPercentage(1.6),
    paddingVertical: RFPercentage(1.6),
  },
});

// Image Styles
export const imageView = (
  height: number | string,
  width: number | string,
): Types.KeyStrValNumStrType => {
  return {height, width};
};

// Margin and Padding Styles
export const margin = (
  marginHorizontal: number,
  marginVertical: number,
): Types.KeyStrValNumType => {
  return {marginHorizontal, marginVertical};
};

export const padding = (
  paddingHorizontal: number,
  paddingVertical: number,
): Types.KeyStrValNumType => {
  return {paddingHorizontal, paddingVertical};
};

// Screen Styles
export const screenContainer = (
  backgroundColor: string,
): Types.KeyStrValNumStrType => {
  return {backgroundColor, flex: 1};
};

// Text Styles
export const textViewRoboto = (
  size: number,
  weight: Exclude<TextStyle['fontWeight'], undefined>,
  color: string,
  lineHeight: number = RFPercentage(2),
  align: Exclude<TextStyle['textAlign'], undefined> = 'left',
  textTransform: Exclude<TextStyle['textTransform'], undefined> = 'none',
): Types.KeyStrValNumStrType => {
  return {
    color,
    fontFamily: 'Roboto',
    fontSize: size,
    fontWeight: weight,
    lineHeight,
    textAlign: align,
    textTransform: textTransform,
  };
};

export const textViewSaira = (
  size: number,
  weight: Exclude<TextStyle['fontWeight'], undefined>,
  color: string,
  lineHeight: number = RFPercentage(2),
  align: Exclude<TextStyle['textAlign'], undefined> = 'left',
  textTransform: Exclude<TextStyle['textTransform'], undefined> = 'none',
): Types.KeyStrValNumStrType => {
  return {
    color,
    fontFamily: 'Saira',
    fontSize: size,
    fontWeight: weight,
    lineHeight,
    textAlign: align,
    textTransform: textTransform,
  };
};
