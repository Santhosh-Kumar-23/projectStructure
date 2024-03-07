import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import * as Constants from '../utils/constants';
import AuthNavigations from './authNavigations';

const RootNavigation = (): React.JSX.Element => {
  // Navigation Variables
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={Constants.SPLASH}
      screenOptions={(): NativeStackNavigationOptions => ({
        headerBackVisible: false,
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerShown: false,
      })}>
      {AuthNavigations()}
    </Stack.Navigator>
  );
};

export default RootNavigation;
