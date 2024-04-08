import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const CartCard = ({item,deleteitemfromcart}) => {
    // console.log({item})
  return (
    <View style={{marginVertical:20,flexDirection:'row'}}>
        <Image 
        style={{height:125,width:90,resizeMode:"stretch",borderWidth:1,borderColor:'black',borderRadius:20}}
        source={{uri:item.image}}/>
        <View style={{marginHorizontal:15,flex:1}}>
      <Text style={{fontSize:24,color:"black",fontWeight:'500'}}>{item.title}</Text>
      <Text style={{fontSize:18,color:"black"}}>{item.price}</Text>
      {/* <Text style={{fontSize:20,color:"black",marginTop:15,fontWeight:'400'}}>Size: {item.size}</Text> */}
      </View>
      <TouchableOpacity onPress={()=>deleteitemfromcart(item)}>
      <FontAwesome6 name="trash" size={22} color={"red"}/>
      </TouchableOpacity>
    </View>
  )
}

export default CartCard

const styles = StyleSheet.create({})