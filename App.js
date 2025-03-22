import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BlogIndex from './src/screens/BlogIndex';
import  { Provider} from './src/context/BlogContext'

const Stack = createNativeStackNavigator();

const AppContents = () => {
  console.log(Provider);
  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="BlogList">  
            <Stack.Screen name="BlogList" component={BlogIndex} options={{ title: "Blog List" }} />
          </Stack.Navigator>
        </NavigationContainer>
     
  );
};

export default function App() {
  return(
  <Provider>
    <AppContents />
  </Provider>
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
