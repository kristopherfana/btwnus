
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View ,Text} from 'react-native';


const Stack = createNativeStackNavigator();

export default function Profile() {
  return (
   <View style={{justifyContent:'center', alignContent:'center',alignItems:'center', flexDirection:'column'}}>
    
    <Text style={{justifyContent:'center', textAlign:'center',}}>This is the profile</Text>
     </View>
  );
}
