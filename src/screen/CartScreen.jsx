import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/Header';
import CartCard from '../../components/CartCard';
import { CartContext } from '../../context/CartContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const CartScreen = () => {
    const {cart,totalprice,deleteitemfromcart}=useContext(CartContext);
    // console.log("cart.lenght",cart.length);
  return (
    <LinearGradient colors={['#deecff', '#e4ecf7', '#f2f3f5']}
    style={styles.linearGradient} >
    <Header isCart={true}/>
   {(cart.length > 0) ?(<>
   <View style={{flex:1}}>
    {/* <CartCard/> */}
    <FlatList data={cart} 
    showsVerticalScrollIndicator={false}
    ListFooterComponentStyle={{
        paddingBottom: 80,
    }}
    ListFooterComponent={
    <>
    <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:22,color:"black",flex:1,fontWeight:'400'}}>Total:</Text>
        <Text style={{fontSize:22,color:"black",fontWeight:'400'}}>₹{totalprice}</Text>
    </View>
    <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:22,color:"black",flex:1,fontWeight:'400'}}>Shipping Charges:</Text>
        <Text style={{fontSize:22,color:"black",fontWeight:'400'}}>₹0</Text>
    </View>
    <View style={{borderWidth:1,marginVertical:10}}></View>
    <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:23,color:"black",flex:1,fontWeight:'400'}}>Grand Total:</Text>
        <Text style={{fontSize:23,color:"black",fontWeight:'400'}}>₹{Math.round(totalprice)}</Text>
    </View>
    <View style={{borderWidth:1,marginVertical:10}}></View>
    </>}
    renderItem={({item})=><CartCard item={item} deleteitemfromcart={deleteitemfromcart}/>}/>
    </View>
    <TouchableOpacity activeOpacity={0.8} style={styles.chekoutbutton}>
    <Text style={{color:"white",fontSize:22}}>CheckOut</Text>
    </TouchableOpacity>
    </>):(<View style={{alignItems:'center',justifyContent:"center",flex:1}}>
        <MaterialCommunityIcons name="cart-variant" size={100} color={"grey"} />
        <Text style={{fontSize:28,color:'grey'}}>No items in cart</Text></View>)} 
    </LinearGradient>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    linearGradient:{
        flex:1,
        padding:20,
    },
    chekoutbutton:{
     backgroundColor:"#3f3780",
     padding:10,
     borderRadius:20,
     alignItems:"center",
     justifyContent:"center",
     width:"90%",
     height:50,
     marginLeft:20,
     marginTop:10,
     marginBottom:-10,
    },
})