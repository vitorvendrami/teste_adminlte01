import 'react-native-gesture-handler'
import React from 'react';
import Routes from './routes/index'
import { Provider } from './contexts/provider'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {

  return (
    <NavigationContainer>
      <Provider>
        <Routes />
      </Provider>
    </NavigationContainer>
  );
}