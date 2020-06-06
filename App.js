import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import { Provider } from "./src/context/BlogContext"
import HomeScreen from './src/screens/HomeScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const Stack = createStackNavigator();

export default function App(props) {
  return (
    <Provider>
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer >
          <Stack.Navigator>
            <Stack.Screen name="home" options={HomeScreen.options} component={HomeScreen} />
            <Stack.Screen name="show" options={ShowScreen.options} component={ShowScreen} />
            <Stack.Screen name="edit" component={EditScreen} />
            <Stack.Screen name="create" component={CreateScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
