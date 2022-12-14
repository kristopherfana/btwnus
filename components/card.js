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
                    <Text style={styles.crd_user_name}>Rubinaldo Domingos</Text>
                    <Text style={styles.crd_time}>12hrs ago</Text>
                </View>
            </View>

            <View style={styles.pst_img}>
                <Image style={styles.image} source={require('../assets/image/profile.jpg')}  />
            </View>

            <View style={styles.interactionbar}>
                <View style={styles.interactionContent}>
                <TouchableOpacity>
                <FontAwesome name='heart' size={18} style={{marginRight:8}}/>
                </TouchableOpacity>
                <Text>122K</Text>
                </View>

                <View style={styles.interactionContent}>
                <FontAwesome name='comment' size={18} style={{marginRight:8}}/>
                <Text>122K</Text>
                </View>

                <View style={styles.interactionContent}>
                <TouchableOpacity>
                <FontAwesome name='save' size={18} style={{marginRight:8}}/>
                </TouchableOpacity>
                <Text>122K</Text>
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
   padding:20,
    flexDirection:'row',
    

    
},
crd_user_image:{
    width:45,
    height:45,
    borderRadius: 1000,
},
crd_user_name:{
    fontWeight:'bold'
},
crd_top_info:{
justifyContent:'center',
padding:10,
},
crd_time:{
    fontWeight:'bold'
},
pst_img:{

    height:380,
    alignContent:'center'
},
image:{
    width: '100%',
    height: '100%',
    aspectRatio: 1,
},
interactionbar:{
    padding:20,
    flexDirection:'row'
},
interactionContent:{
    flexDirection:'row',
    marginRight:25,

}
});