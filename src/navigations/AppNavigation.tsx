import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from '../components/user/Page1';
import Page2 from '../components/user/Page2';
import Page3 from '../components/user/Page3';
import Page4 from '../components/user/Page4';
import Page5 from '../components/user/Page5';
import Page6 from '../components/user/Page6';

export type RootStackParams = {
  Page1: undefined;
  Page2: undefined;
  Page3: undefined;
  Page4: undefined;
  Page5: undefined;
  Page6: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Page1'>
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="Page3" component={Page3} />
        <Stack.Screen name="Page4" component={Page4} />
        <Stack.Screen name="Page5" component={Page5} />
        <Stack.Screen name="Page6" component={Page6} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation