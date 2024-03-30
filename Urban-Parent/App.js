import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/Deliveroo/screens/HomeScreen';
// import SplashScreen from 'react-native-splash-screen';
// import Instabug from 'instabug-reactnative';

export default function App() {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    // SplashScreen.hide();

    // Instabug.init({
    //   token: 'ed906fe9dd47f400edae28e1b4d7fd5f',
    //   invocationEvents: [Instabug.invocationEvent.shake],
    // });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
