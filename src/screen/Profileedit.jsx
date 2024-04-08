import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useContext, useState} from 'react'
import ImagePicker from 'react-native-image-crop-picker';
import { CartContext } from '../../context/CartContext';
import {useNavigation} from "@react-navigation/native"
import { Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Profileedit = () => {
    const navigation=useNavigation();
    const {userdata,userInput}=useContext(CartContext);
    const [name,setname]=useState(userInput.name);
    const [mobile,setmobile]=useState(userInput.mobile);
    const [address,setadress]=useState(userInput.address);
    const [imagedata,setimage]=useState(userInput.image);
    // console.log("imagedata",imagedata)
    const handledata=()=>{
        const data={};
        data.name=name;
        data.mobile=mobile;
        data.address=address;
        data.image=imagedata;
        if(!mobile||!name||!address||name.trim().length===0||address.trim().length===0||mobile.trim().length===0)
        {
           return Alert.alert("Fill Details Properly!");
        }
        userdata(data);
        navigation.navigate("Account",{screen:"ProfileScreen"});
    }
    const imagehandle = () => {
        // Alert.alert(
        //     "Choose an Option",
        //     "Select a photo from your device",
        //     [
        //         { text: "Cancel", style: "cancel" },
        //         { text: "Camera", onPress: () => openCamera() },
        //         { text: "Gallery", onPress: () => openGallery() },
        //     ]
        // );
        openGallery();
    }
    // const openCamera = () => {
    //     ImagePicker.openCamera({ 
    //         width: 400,
    //         height: 400,
    //         cropping: true,
    //         includeBase64: true,
    //         useFrontCamera:true,
    //     }).then(image => {
    //         let data = `data:${image.mime};base64,${image.data}`;
    //         setimage(data)
    //     });
    // }
    
    const openGallery = () => {
        ImagePicker.openPicker({ 
            width: 400,
            height: 400,
            cropping: true,
            includeBase64: true,
            cropperCircleOverlay: true,
            avoidEmptySpaceAroundImage: true,
            freeStyleCropEnabled: true,
        }).then(image => {
            let data = `data:${image.mime};base64,${image.data}`;
            setimage(data)
        });
    }
    
        // console.log(imagedata);
  return (
    <LinearGradient colors={['#deecff', '#e4ecf7', '#f2f3f5']} >
    <View style={{padding:15}}>
        <ScrollView>
      <TouchableOpacity onPress={imagehandle}>
         {(imagedata)?
        (<View style={styles.container}><Image source={{uri:imagedata}} style={styles.circle}/></View>):
        (<View style={styles.container}><FontAwesome name="user-circle-o" size={200} color={"grey"}/></View>)
}
      </TouchableOpacity>

    <View style={{flexDirection:'row',marginBottom:20,marginTop:20}}>
        <Text style={styles.detailtext}>Name: </Text>
        <TextInput style={{borderWidth:1,borderColor:'black',color:"black",flex:1,borderRadius:20,marginLeft:20}} 
      value={name}  maxLength={20} placeholder='Enter your Name' placeholderTextColor={"grey"}
      onChangeText={(text) => setname(text)}></TextInput>
    </View>

      <View style={{flexDirection:'row',marginBottom:20}}>
      <Text style={styles.detailtext}>Number: </Text>
      <TextInput style={{borderWidth:1,borderColor:'black',color:"black",flex:1,borderRadius:20}}  keyboardType='phone-pad' 
      value={mobile} maxLength={12} placeholder='Enter your Phone Number' placeholderTextColor={"grey"}
      onChangeText={(text) => setmobile(text)}></TextInput>
      </View>

      <View style={{flexDirection:'row'}}>
      <Text style={styles.detailtext}>Address: </Text>
      <TextInput style={{borderWidth:1,borderColor:'black',color:"black",flex:1,borderRadius:20}} 
      value={address} maxLength={25} placeholder='Enter your address' placeholderTextColor={"grey"}
      onChangeText={(text) => setadress(text)}></TextInput>
      </View>
      <TouchableOpacity  onPress={handledata} activeOpacity={0.8} style={styles.chekoutbutton}>
         <Text style={{color:"white",fontSize:22}}>Save Changes</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
    </LinearGradient>
  )
}

export default Profileedit

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        alignItems: 'center', 
      },
      circle: {
        width: 240, 
        height: 240,
        backgroundColor: 'pink',
        borderRadius: 120,
        borderWidth:2,
        borderColor:'black',
      },
      detailtext:{
        color:"black",
        fontSize:20,
        fontWeight:"500",
        marginTop:10,
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
})