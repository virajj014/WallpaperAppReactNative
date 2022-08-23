import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RecoilRoot } from 'recoil';
import Screen1 from './views/Screen1';
import Screen2 from './views/Screen2';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='S1'>
          <Stack.Screen name='S1' component={Screen1}
            options={{
              headerStyle: {
                backgroundColor: '#42f5b0',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }, title: 'Home',
              headerTitleAlign: 'center'
            }}

          // options={{ headerShown: false }}
          />
          <Stack.Screen name='S2' component={Screen2}
            options={{
              headerStyle: {
                backgroundColor: '#000000',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }, title: 'Back',
              headerTitleAlign: 'center'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 20,
    width: "100%",
    height: "100%",
    // backgroundColor: "blue",
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
