import Login from './screens/login';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // test
<NavigationContainer>
<Stack.Navigator screenOptions={{headerShown: false}}>

  <Stack.Screen 
  name='Login'
  component={Login}
  />

  <Stack.Screen
  name='Home'
  component={Home}
  />
</Stack.Navigator>
</NavigationContainer>
    
  );
}
