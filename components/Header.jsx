import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from "@react-navigation/native"
const Header = ({isCart,profileedit,isfav}) => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.appicon}
     activeOpacity={0.8} onPress={()=>{(isCart||profileedit||isfav)&&navigation.navigate("Home",{screen:"HomeScreen"})}}
    >{
      (isCart===true||profileedit===true||isfav===true)?(<Ionicons name="chevron-back-sharp" size={35} color={"darkblue"}/>)
      :(<FontAwesome name="random" size={35} color={"darkblue"}/>)
    }
    </TouchableOpacity>
    {
      (isCart===true)?(<Text style={{fontSize:30,color:"black",fontWeight:"400"}}>My Cart</Text>)
      :(profileedit===true)
      ?(<Text style={{fontSize:30,color:"black",fontWeight:"400"}}>My Profile</Text>)
      :(isfav===true)?(<Text style={{fontSize:30,color:"black",fontWeight:"400"}}>Favourite</Text>)
      :(null)
    }
    <TouchableOpacity style={styles.dpicon}  activeOpacity={0.8} 
    onPress={()=>(profileedit)&&navigation.navigate("Profile Edit")}>
      {(profileedit===true)?(<MaterialCommunityIcons name="account-edit" size={45} color={"darkblue"} />):(
      <EvilIcons name="user" size={45} color={"darkblue"} />)}
    </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent:"space-between",
    },
    appicon:{
        backgroundColor:"white",
        height:45,
        width:45,
        alignItems: "center",
        justifyContent:"center",
        borderRadius:22,
        borderWidth:0.2,
    },
    dpicon:{
        backgroundColor:"white",
        height:45,
        width:45,
        alignItems: "center",
        justifyContent:"center",
        borderRadius:22,
        borderWidth:0.2,
    }
})