import React, { useState } from 'react';
import { NavigatorScreenParams } from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import DetailsScreen from '../screens/DetailsScreen';
import TabsNavigator, { TabsStackParamList } from './TabsNavigator';
import AuthNavigator from './AuthNavigator';

export type RootStackParamList = {
  TabsStack: NavigatorScreenParams<TabsStackParamList>;
  Details: {
    id: string;
  };
  Auth: any;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const RootNavigator = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      {loggedIn ? (
        <RootStack.Navigator initialRouteName="TabsStack">
          <RootStack.Screen
            name="TabsStack"
            component={TabsNavigator}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="Details"
            component={DetailsScreen}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="Auth"
            component={AuthNavigator}
            options={{
              headerShown: false,
            }}
          />
        </RootStack.Navigator>
      ) : (
        <AuthNavigator />
      )}
    </>
  );
};

export default RootNavigator;
