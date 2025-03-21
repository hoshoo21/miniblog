import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BlogProvider } from './src/context/BlogContext'; // Use the provider, not the context
import BlogIndex from './src/screens/BlogIndex';

const Stack = createNativeStackNavigator();

const AppContents = () => {
  return (
    <BlogProvider> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BlogList">  
          <Stack.Screen name="BlogList" component={BlogIndex} options={{ title: "Blog List" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
};

export default function App() {
  return <AppContents />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
