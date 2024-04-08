import { Image, Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from "@react-navigation/native"
const Productcard = ({item,handlelike}) => {
  const navigation=useNavigation();
  // console.log(item);
  return (
    <TouchableOpacity 
    onPress={()=>{
      navigation.navigate("Product_Details",{item})
    }}
    activeOpacity={0.9}
    style={styles.container}
    >
        <Image style={styles.image} source={{uri:item.image}}/>
        <Text style={styles.textheading}>{item.title}</Text>
        <Text style={styles.price}>₹{item.price}</Text>
        <TouchableOpacity activeOpacity={0.9} style={styles.favicon} onPress={()=>handlelike(item)}>{
         (item?.fav)?<FontAwesome name="heart-o" size={30} color={"red"} />:<FontAwesome name="heart" size={30} color={"red"} />
        }</TouchableOpacity>
    </TouchableOpacity>
  )
}

export default Productcard

const styles = StyleSheet.create({
    container:{
      marginTop:10,
        flex:1,
        position:'relative'
    },
    image:{
        height:300,
        width:"90%",
        borderRadius:20,
        marginLeft:10,
        alignContent:'space-between',
        resizeMode:'stretch',
    },
    textheading:{
      fontSize:20,
      fontWeight:"600",
      paddingVertical:7,
      paddingHorizontal:8,
      marginHorizontal:6,
      color:"black",
    },
    price:{
      fontSize:14,
      fontWeight:"400",
      paddingHorizontal:8,
      marginHorizontal:6,
      marginBottom:5,
      color:"black",
    },
    favicon:{
      position:'absolute',
      backgroundColor:'white',
      borderRadius:20,
      marginLeft:130,
      marginTop:10,
      height:40,
      width:40,
      justifyContent:'center',
      alignItems:'center',
    },
})