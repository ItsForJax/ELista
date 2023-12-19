import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../screens/Screens';
import colors from '../components/colors';
import { Image } from 'react-native';
const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Listahan"
        screenOptions={{
            headerStyle: {
            backgroundColor: colors.header
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
            fontWeight: 'bold',
            },
                
        }}>
      <Stack.Screen name="Listahan" component={Screens.Listahan} options={{ title: 'ELista' }}  />
      <Stack.Screen name="Lilista" component={Screens.Lilista} options={{ title: 'ELista' }} />
      <Stack.Screen name="Magpapalista" component={Screens.Magpapalista} options={{ title: 'ELista' }} />
      <Stack.Screen name="Nagpalista" component={Screens.Nagpalista} options={{ title: 'ELista' }} />
      <Stack.Screen name="Utang" component={Screens.Utang} options={{ title: 'ELista' }} />
    </Stack.Navigator>
  );
};

export default AppNavigation;