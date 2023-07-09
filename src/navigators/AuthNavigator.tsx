import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import IntroScreen01 from '../screens/Auth/IntroScreen01';
import IntroScreen02 from '../screens/Auth/IntroScreen02';
import LogInScreen from '../screens/Auth/LogInScreen';
import RootNavigator from './RootNavigator';
import TabsNavigator from './TabsNavigator';

export type AuthStackParamList = {
  IntroScreen01: undefined;
  IntroScreen02: undefined;
  LogInScreen: undefined;
  HomeScreen: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Group
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}
      >
        <AuthStack.Screen name="IntroScreen01" component={IntroScreen01} />
        <AuthStack.Screen name="IntroScreen02" component={IntroScreen02} />
        <AuthStack.Screen name="LogInScreen" component={LogInScreen} />
        <AuthStack.Screen name="HomeScreen" component={TabsNavigator} />
      </AuthStack.Group>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
