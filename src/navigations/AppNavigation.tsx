import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from '../screens/Page1';
import Page2 from '../screens/Page2';
import Page3 from '../screens/Page3';
import Page4 from '../screens/Page4';
import Page5 from '../screens/Page5';
import Page6 from '../screens/Page6';
import { useDispatch, useSelector } from 'react-redux';
import { getDataPage } from '../rtk/API'
import type { AppDispatch } from '../rtk/Store';

export type RootStackParams = {
  Page1: undefined;
  Page2: undefined;
  Page3: undefined;
  Page4: undefined;
  Page5: undefined;
  Page6: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const AppNavigation: React.FC = () => {

  const dispatch: AppDispatch = useDispatch();
  const index = useSelector((state: any) => state.app?.index);
  const dataURL = useSelector((state: any) => state.app?.dataURL);


  useEffect(() => {
    //dataURL == null && dispatch(getDataPage());
    dispatch(getDataPage());
    console.log(dataURL);
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {
          index == 1 ? <Stack.Screen name="Page1" component={Page1} />
            : index == 2 ? <Stack.Screen name="Page2" component={Page2} />
              : index == 3 ? <Stack.Screen name="Page3" component={Page3} />
                : index == 4 ? <Stack.Screen name="Page4" component={Page4} />
                  : index == 5 ? <Stack.Screen name="Page5" component={Page5} />
                    : <Stack.Screen name="Page6" component={Page6} />
        }
        {/* <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="Page3" component={Page3} />
        <Stack.Screen name="Page4" component={Page4} />
        <Stack.Screen name="Page5" component={Page5} />
        <Stack.Screen name="Page6" component={Page6} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation