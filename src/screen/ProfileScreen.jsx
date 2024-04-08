import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import Header from '../../components/Header'
import { CartContext } from '../../context/CartContext'
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from "@react-navigation/native"
import LinearGradient from 'react-native-linear-gradient';
const ProfileScreen = () => {
    const {userInput}=useContext(CartContext);
    const navigation=useNavigation();
    // console.log(JSON.stringify(userInput))
  return (
    <LinearGradient colors={['#deecff', '#e4ecf7', '#f2f3f5']} >
      <View style={styles.container}>
      <Header profileedit={true}/>
        {(JSON.stringify(userInput)==='{}')?(
            <View style={{justifyContent:'center',alignItems:'center',marginTop:60}}>
            <Text style={{fontSize:28,color:'black'}}>Oops!</Text>
            <Text style={{fontSize:28,color:'black'}}>Update Your Profile</Text>
             <AntDesign name="profile" size={140} color={"grey"} marginTop={40} />
                 <TouchableOpacity onPress={()=>{navigation.navigate("Profile Edit")}}
                 activeOpacity={0.8} style={styles.chekoutbutton}>
                 <Text style={{color:"white",fontSize:22}}>Edit Profile</Text>
                 </TouchableOpacity>
            </View>
        ):<>
      <View style={{justifyContent: 'center', alignItems:'center'}}>{
        (userInput.image)?<Image style={styles.profile} source={{uri:userInput.image}} /> : null
      }</View>
    <View style={{marginTop:50}}>
        <Text style={styles.detailtext}>Name: {userInput.name}</Text>
        <Text style={styles.detailtext}>Mobile No: {userInput.mobile}</Text>
        <Text style={styles.detailtext}>Address: {userInput.address}</Text>
    </View>
      {/* <View style={{justifyContent: 'center', alignItems:'center',marginTop:20}}><Text style={{color:'black',fontSize:28,fontWeight:"500"}}>{userInput.name}</Text></View>
      <View style={{justifyContent: 'center', alignItems:'center',marginTop:20}}><Text style={{color:'black',fontSize:24,fontWeight:"400"}}>{userInput.mobile}</Text></View>
      <View style={{justifyContent: 'center', alignItems:'center',marginTop:20}}><Text style={{color:'black',fontSize:24,fontWeight:"400"}}>{userInput.address}</Text></View> */}
      </>}
    </View>
    </LinearGradient>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container:{
        padding:20,
    },
    profile:{
        height:240,
        width:240,
        borderRadius:120,
        borderWidth:2,
        borderColor:'black',
        marginTop:30,
    },
    chekoutbutton:{
        backgroundColor:"#3f3780",
        padding:10,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        height:50,
        marginLeft:15,
        marginTop:20,
       },
       detailtext:{
        color:"black",
        fontSize:22,
        padding:10,
        fontWeight:"500",
      },
})