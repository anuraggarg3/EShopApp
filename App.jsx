import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screen/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Productdetail from './src/screen/Productdetail';
import CartScreen from './src/screen/CartScreen';
import { CartContext, CartProvider } from './context/CartContext';
import ProfileScreen from './src/screen/ProfileScreen';
import Profileedit from './src/screen/Profileedit';
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
const MyHomeStack=()=>{
  return(
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="Product_Details" component={Productdetail}/>
    </Stack.Navigator>
  )
}

const Profile=()=>{
  return(
    <Stack.Navigator initialRouteName=''>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Profile Edit" component={Profileedit}/>
    </Stack.Navigator>
  )
}


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <CartProvider>
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarActiveTintColor:"black",
      }}
      // initialRouteName='Cart'
      >
        <Tab.Screen name="Home" component={MyHomeStack} 
        options={{
          tabBarIcon:({size,color,focused})=>{
            return <Entypo name={"home"} size={size} color={color}
            />
          }
        }} />
        <Tab.Screen name="Reorder" component={SettingsScreen}
          options={{
            tabBarIcon:({size,color})=>{
              return <FontAwesome name={"heart"} size={size} color={color}
              />
            }
          }} />
        <Tab.Screen name="Cart" component={CartScreen} 
        options={{
          tabBarIcon:({size,color})=>{
            const {cart}=React.useContext(CartContext);
            // console.log(cart)
            return(
              <View>
                {(cart.length>0)?
               <View style={{backgroundColor:color,height:18,width:18,borderRadius:9,alignContent:'center',alignItems:'center',justifyContent:'center',left:10,bottom:-4}} ><Text style={{color:"white",}}>{cart.length}</Text></View>
               :<></>
                }
               <Entypo name={"shopping-cart"} size={size} color={color}/>
               </View>
              )
          }
        }} />
        <Tab.Screen name="Account" component={Profile}
        options={{
          tabBarIcon:({size,color})=>{
            return <MaterialCommunityIcons name={"account"} size={size} color={color}
            />
          }
        }} />
      </Tab.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
}