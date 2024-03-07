import {StyleSheet} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import * as Colors from '../utils/colors';

// Button Styles
export const ButtonStyles = StyleSheet.create({
  defaultContentRowReverseStyle: {
    flexDirection: 'row-reverse',
    paddingHorizontal: RFPercentage(4),
    paddingVertical: RFPercentage(1.6),
  },
  defaultIconStyle: {height: RFPercentage(2.4), width: RFPercentage(2.4)},
  defaultLabelStyle: {
    fontFamily: 'Roboto',
    fontSize: RFPercentage(1.8),
    fontWeight: '400',
    lineHeight: RFPercentage(2.16),
    textAlign: 'center',
  },
  defaultStyle: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 50,
  },
});
