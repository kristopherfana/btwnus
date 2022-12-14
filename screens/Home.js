import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Card from '../components/card';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';


export default function Home({navigation}) {


  return (

    <View style={styles.container}>
   <View style={styles.topBar}>
    <Image source={require('../assets/image/logo.png')} style={styles.logo}/>

   </View>

   <View>

    <Card />
   </View>
    </View>

    
   
  
    
  );
}

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'flex-start',
    alignContent:'center',
    padding:0,
    margin:0,
    flexDirection:'column',
    
},
topBar:{
    height:80, 
    
    alignContent:'center',
    justifyContent:'center'
},
logo:{
    alignSelf:'center',
    
}
});