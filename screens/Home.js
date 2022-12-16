import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image,FlatList} from 'react-native';
import Card from '../components/card';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Profile from './profile';


export default function Home({navigation}) {

  const renderItem = ({ item }) => (
    <Card />
  );
  return (

    <View style={styles.container}>
   <View style={styles.topBar}>
    <Image source={require('../assets/image/logo.png')} style={styles.logo}/>

   </View>


{/*  temporary  profile btn  */}
   <View >
   <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
   
    <Text style={styles.btn_text}> Profile</Text>
    
   </TouchableOpacity>
   </View>

   <View>
   <FlatList
        data={Card}
        renderItem={renderItem}
        style={{height:undefined,marginBottom:90}}
      />
    
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