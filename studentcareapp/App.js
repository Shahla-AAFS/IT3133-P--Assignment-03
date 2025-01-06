import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Image } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';

export default function App() {
  return (
    <PaperProvider>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            options={{
              title: 'UoV Student Care',
              headerStyle: { backgroundColor: '#510e51' },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
            }}
          >
            {(props) => (
              <ScreenLayout>
                <Login {...props} />
              </ScreenLayout>
            )}
          </Stack.Screen>
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
