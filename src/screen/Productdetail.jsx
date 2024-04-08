import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import {useRoute} from "@react-navigation/native"
import Header from '../../components/Header';
import { CartContext } from '../../context/CartContext';
import {useNavigation} from "@react-navigation/native"
const sizes=["S","M","L","XL"];
const Productdetail = () => {
    const route=useRoute();
    const navigation=useNavigation();
    const item=route.params.item;
    const {addtocart}=useContext(CartContext);
    const [sizee,setsize]=useState(0);
    const  handleaddtocart=(item)=>{
        item.size=sizee;
        // if(item.quantity===undefined) item.quantity=1;
        // else item.quantity=item.quantity+1;
        addtocart(item);
        navigation.navigate("Cart")
    }
  return (
    <LinearGradient colors={['#deecff', '#e4ecf7', '#f2f3f5']}
    style={styles.linearGradient} >
  <ScrollView style={{marginBottom:30}}>
     <View style={styles.container}>
        <Header/>
        <Image style={styles.image} source={{uri:item.image}}/>
        <View style={styles.textcontiner}>
        <Text style={{color:"black",fontWeight:'600',fontSize:20}}>{item.title}</Text>
        <Text style={{color:"black",fontWeight:'600',fontSize:20}}>{item.price}</Text>
        </View>
        <Text style={{color:"black",fontSize:20,fontWeight:'bold',marginLeft:15}}>Rating :{item.rating.rate} ⭐</Text>
    </View>
    {/* <View style={styles.sizecontainer}>
    {sizes.map((size,index)=>{
    return(
    <TouchableOpacity onPress={()=>{setsize(size)}}
    activeOpacity={0.6}
    key={index}
    style={{borderWidth:1,marginHorizontal:10,borderRadius:10,backgroundColor:"white"}}
    >
      {(sizee===size)? <Text style={{color:"white",backgroundColor:"#3f3780",fontSize:20,fontWeight:'normal',paddingHorizontal:10,borderRadius:10,borderColor:"white"}}> {size} </Text>
      : <Text  style={{color:"black",fontSize:20,fontWeight:'normal',paddingHorizontal:10,borderRadius:10}}> {size} </Text>}  
    </TouchableOpacity>)
 })}
 </View> */}
 <TouchableOpacity 
 activeOpacity={0.8}
 onPress={()=>{handleaddtocart(item)}}
 style={styles.buttonaddtocart}>
    <Text style={{color:"white",fontSize:22}}>Add to cart</Text>
 </TouchableOpacity>
 </ScrollView>
    </LinearGradient>
  )
}

export default Productdetail

const styles = StyleSheet.create({
    linearGradient:{
        flex:1,
    },
    container:{
        padding:20,
    },
    image:{
        marginTop:10,
        alignItems:'center',
        alignContent:"center",
        justifyContent:'center',
        height:400,
        width:"90%",
        borderRadius:15,
        marginLeft:15,
        resizeMode:'stretch'
    },
    textcontiner:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:12,
    },
    sizecontainer:{
        flexDirection:"row",
        marginLeft:30,
        marginTop:-14,
    },
    buttonaddtocart:{
    backgroundColor:"#3f3780",
     padding:10,
     borderRadius:20,
     alignItems:"center",
     justifyContent:"center",
     marginTop:40,
     width:"90%",
     height:50,
     marginLeft:20,
    }
})
