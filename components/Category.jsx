import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Category = ({item,selectedcat,setselectedcat}) => {
  return (
    <TouchableOpacity onPress={()=>setselectedcat(item)} activeOpacity={0.8}>
      <Text style={[styles.catText,
    selectedcat===item &&{
        color: 'white',
        backgroundColor:'#3f3780'
    }
    ]}>{item}</Text>
      <Text></Text>
    </TouchableOpacity>
  )
}

export default Category

const styles = StyleSheet.create({
    catText:{
        marginTop:12,
        fontSize:17,
        fontWeight:"600",
        backgroundColor:"#d5d7db",
        color:"#77787a",
        paddingVertical:7,
        paddingHorizontal:14,
        marginHorizontal:6,
        borderRadius:14,
        textAlign:"center",
    },
})