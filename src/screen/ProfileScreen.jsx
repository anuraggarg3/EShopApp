import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Header from '../../components/Header'
import { CartContext } from '../../context/CartContext'

const ProfileScreen = () => {
    const {userInput}=useContext(CartContext);
  return (
      <View style={styles.container}>
      <Header profileedit={true}/>
      <View style={{justifyContent: 'center', alignItems:'center'}}>{
        (userInput.image)?<Image style={styles.profile} source={{uri:userInput.image}} /> : null
      }</View>
      <View style={{justifyContent: 'center', alignItems:'center',marginTop:20}}><Text style={{color:'black',fontSize:28,fontWeight:"500"}}>{userInput.name}</Text></View>
      <View style={{justifyContent: 'center', alignItems:'center',marginTop:20}}><Text style={{color:'black',fontSize:24,fontWeight:"400"}}>{userInput.mobile}</Text></View>
      <View style={{justifyContent: 'center', alignItems:'center',marginTop:20}}><Text style={{color:'black',fontSize:24,fontWeight:"400"}}>{userInput.address}</Text></View>
    </View>
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
    }
})