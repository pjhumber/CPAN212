import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './store';
import Home from './screens/Home';
import Editor from './screens/Editor';
import Deleted from './screens/Deleted';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Editor" component={Editor} />
          <Stack.Screen name="Deleted" component={Deleted} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
