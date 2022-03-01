import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../types/RootStackParamList';

import HomeScreen from '../screens/homeScreen';
import DetailsScreen from '../screens/detailsScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
