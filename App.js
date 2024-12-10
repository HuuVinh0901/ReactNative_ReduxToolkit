import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import List from './component/List';
import Add from './component/Add';
import Update from './component/Update';
const Stack = createStackNavigator()
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator >
          <Stack.Screen 
          name='List'
          component={List}
          options={{headerShown:false}}
          />
          <Stack.Screen 
          name='Add'
          component={Add}
          options={{headerShown:true}}
          />
          <Stack.Screen 
          name='Update'
          component={Update}
          options={{headerShown:true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
