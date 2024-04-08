import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useContext, useState} from 'react'
import ImagePicker from 'react-native-image-crop-picker';
import { CartContext } from '../../context/CartContext';
import {useNavigation} from "@react-navigation/native"
import { Alert } from 'react-native';
const Profileedit = () => {
    const navigation=useNavigation();
    const {userdata,userInput}=useContext(CartContext);
    const [name,setname]=useState(userInput.name);
    const [mobile,setmobile]=useState(userInput.mobile);
    const [address,setadress]=useState(userInput.address);
    const [imagedata,setimage]=useState(userInput.image);
    console.log("imagedata",imagedata)
    const handledata=()=>{
        const data={};
        data.name=name;
        data.mobile=mobile;
        data.address=address;
        data.image=imagedata;
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
    <View>
      <TouchableOpacity onPress={imagehandle}>
         {(imagedata)?
        (<View style={styles.container}><Image source={{uri:imagedata}} style={styles.circle}/></View>):
        (<View style={styles.container}><View style={styles.circle} ></View></View>)
} 
      </TouchableOpacity>
      <TextInput style={{borderWidth:1,borderColor:'black',color:"black"}} 
      value={name}
      onChangeText={(text) => setname(text)}></TextInput>
      <Text>You entered name: {name}</Text>

      <TextInput style={{borderWidth:1,borderColor:'black',color:"black"}} 
      value={mobile}
      onChangeText={(text) => setmobile(text)}></TextInput>
      <Text>You entered MobileNo: {mobile}</Text>

      <TextInput style={{borderWidth:1,borderColor:'black',color:"black"}} 
      value={address}
      onChangeText={(text) => setadress(text)}></TextInput>
      <Text>You entered Adress: {address}</Text>
      <TouchableOpacity onPress={handledata}><Text>Update Profile</Text></TouchableOpacity>
    </View>
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
      }
})