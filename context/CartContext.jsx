import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{ createContext,useEffect,useState} from 'react'
export const CartContext = createContext();

export const CartProvider=({children})=>{
    const [totalprice,settotalprice]=useState(0);
    const [userInput, setUserInput] = useState({});
    const [cart,setcart] = useState(()=>{return ([])});
    // console.log("userInput",userInput);
    useEffect(()=>{
        loadcartitems();
        loaduserdata();
    },[])
    const loadcartitems=async()=>{
        let carts=await AsyncStorage.getItem("carts");
        carts=carts?JSON.parse(carts):[];
        setcart(carts);
        totalsum(carts);
    }
    const addtocart=async(item)=>{
        const itemexist=cart.findIndex((cart)=>cart.id===item.id);
        if(itemexist===-1) {
            const newCartItems=[...cart,item];
            await AsyncStorage.setItem("carts",JSON.stringify(newCartItems));
            setcart(newCartItems);
            totalsum(newCartItems);
        }   
    }
    const userdata=async(data)=>{
        await AsyncStorage.setItem("users",JSON.stringify(data));
        setUserInput(data);
    }
    const loaduserdata=async(data)=>{
        let userdata=await AsyncStorage.getItem("users");
        userdata=userdata?JSON.parse(userdata):{};
        setUserInput(userdata);
    }
    const deleteitemfromcart =async(item)=>{
        const newItems=cart.filter((cart)=>cart.id!==item.id);
        await AsyncStorage.setItem("carts",JSON.stringify(newItems));
        setcart(newItems);
        totalsum(newItems);
    }
   const totalsum= (cart)=>{
    let sum=0;
    cart.map((item)=>{
        sum=sum+item.price;
    })
    settotalprice(sum);
    // console.log(sum)
    }
    return (
        <CartContext.Provider value={{cart,setcart,addtocart,totalprice,deleteitemfromcart,userdata,loaduserdata,userInput}}>
            {children}
        </CartContext.Provider>
    )
}