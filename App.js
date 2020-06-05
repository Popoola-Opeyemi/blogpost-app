import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

export default function App(props) {
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
