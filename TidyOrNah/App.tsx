import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Menu from './screens/Menu';
import Upload from './screens/Upload';
import Stats from './screens/Stats';
import Acknowledge from './screens/Acknowledge';

const Stack = createStackNavigator()

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Cam" component={Upload} />
        <Stack.Screen name="Stats" component={Stats} />
        <Stack.Screen name="Acknowledge" component={Acknowledge} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;