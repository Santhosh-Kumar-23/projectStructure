import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import OnBoardings from '../../screens/authScreens/onBoardings';
import Splash from '../../screens/authScreens/splash';
import * as Constants from '../utils/constants';

const AuthNavigations = (): React.JSX.Element => {
  // Navigation Variables
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Group>
      <Stack.Screen name={Constants.SPLASH} component={Splash} />
      <Stack.Screen name={Constants.ONBOARDINGS} component={OnBoardings} />
    </Stack.Group>
  );
};

export default AuthNavigations;
