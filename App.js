import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BlogIndex from './src/screens/BlogIndex';
import  { Provider} from './src/context/BlogContext'
import ShowBlog from './src/screens/ShowBlog';
import CreateBlog from './src/screens/CreateBlog';
import EditBlog from './src/screens/EditBlog';


const Stack = createNativeStackNavigator();

const AppContents = () => {
 
  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="BlogList">  
            <Stack.Screen name="BlogList" component={BlogIndex} options=
            {
              { title: "Blog List" , 
                 
              } 
            } />
            <Stack.Screen name="BlogDetails" component={ShowBlog} options={{ title: "Show Blog" }} />
            <Stack.Screen name="CreateBlog" component={CreateBlog} options={{ title: "Create Blog" }} />
            <Stack.Screen name="EditBlog" component={EditBlog} options={{ title: "Edit Blog" }} />
            
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
