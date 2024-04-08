import { StyleSheet, Text, TextInput, View ,TouchableOpacity, FlatList, ScrollView} from 'react-native'
import React, { useState ,useRef} from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/Header';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Category from '../../components/Category';
import Productcard from '../../components/Productcard';
import data from '../../components/data.json'
const catogrieslist=["All","Trending Now","Hot Deals","Discount"];
const HomeScreen = () => {
    const textInputRef = useState(null);
    const [selectedcat,setselectedcat]=useState("All");
    const [product,setproduct]=useState(()=>{
        return data.products});
    const handlelike=(item)=>{
    const newproduct=product.map((prod)=>{
            if(prod.id===item.id){
                return {...prod,fav:1};
            }
            return prod
        })
        setproduct(newproduct);
    }
    return (
        <LinearGradient colors={['#deecff', '#e4ecf7', '#f2f3f5']}
            style={styles.linearGradient} >
         <FlatList data={product}
          renderItem={({item,index})=>(
            <Productcard 
            item={item}
            handlelike={handlelike}/>
          )}
          keyExtractor={(item)=>item.id}
          contentContainerStyle={{
            paddingBottom:20,
          }}
          numColumns={2}
         scrollEnabled={true}
         showsVerticalScrollIndicator={false}
         ListHeaderComponent={
            <>
             <Header />
            <Text style={styles.toptext}> Just do Random Things!</Text>
            <View style={styles.search}>
                <TouchableOpacity style={styles.serachicon} onPress={() => {
                        textInputRef.current.focus();
                    }} activeOpacity={1} >
                    <EvilIcons name="search" size={26} color={"#C0C0C0"} />
                </TouchableOpacity>
                <TextInput style={styles.textinput}
                    placeholder='Search anythinng!'
                    placeholderTextColor={"#C0C0C0"}
                    ref={textInputRef}
                />
            </View>
            <FlatList data={catogrieslist}
             renderItem={({item})=>(
                <Category 
                item={item} 
                selectedcat={selectedcat}
                setselectedcat={setselectedcat}
                />
             )}
             keyExtractor={(item)=>item}
             horizontal={true}
             showsHorizontalScrollIndicator={false}
              />
            </>
         }
         />
        </LinearGradient>
    )
}


export default HomeScreen

const styles = StyleSheet.create({
    linearGradient:{
        // flex:1,
        padding:20,
    },
    toptext:{
     fontSize:24, 
     color:"black",  
     marginTop:20,
    },
    search:{
        backgroundColor:"white",
        flexDirection:"row",
        marginTop:15,
        height:40,
        borderRadius:12,
        alignItems:"center",
    },
    serachicon:{
        marginBottom:5,
        alignItems:"center",
        flex:0.1,
        backgroundColor:"transparent",
    },
    textinput:{
        flex:1,
    },
})