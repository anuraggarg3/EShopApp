import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/Header';

const FavScreen = () => {
  return (
    <LinearGradient colors={['#deecff', '#e4ecf7', '#f2f3f5']} style={{flex:1}}>
    <View style={{padding:20}}>
        <Header isfav={true}/>
      
    </View>
    </LinearGradient>
  )
}

export default FavScreen

const styles = StyleSheet.create({})