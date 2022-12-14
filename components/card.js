import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import { useFonts } from 'expo-font';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';


export default function Card({navigation}) {


  return (

   
   <View style={styles.container}>
    <View style={styles.card}>
            <View style={styles.cardHead}>
                <Image source={require('../assets/image/profile.jpg')} style={styles.crd_user_image} />
                <View style={styles.crd_top_info}>
                    <Text>Rubinaldo Domingos</Text>
                    <Text>12hrs ago</Text>
                </View>
            </View>
    </View>

   </View>
 

    
   
  
    
  );
}


const styles = StyleSheet.create({
card:{
  
    height:60,
},
cardHead:{
   
    flexDirection:'row',
    height:23,
    
},
crd_user_image:{
    width:45,
    height:45,
    borderRadius: 1000,
}
});