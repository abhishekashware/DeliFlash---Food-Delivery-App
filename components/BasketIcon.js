import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../slices/basketSlice'
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { CurrencyRupeeIcon } from 'react-native-heroicons/outline';

const BasketIcon = () => {
    const items=useSelector(selectBasketItems);
    const navigation=useNavigation();
    const basketTotal=useSelector(selectBasketTotal);
    if(items.length==0) return null;
  return (
   <View className="absolute bottom-10 w-full z-50">
    <TouchableOpacity 
    onPress={()=>{
        navigation.navigate("Basket",{});
    }}
    className="mx-5 bg-[#00ccbb] p-4 rounded-lg flex-row items-center space-x-1" >
    <Text className="bg-white text-white font-extrabold text-lg bg-[#01a296] py-1 px-2">
            {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
            View Basket
        </Text>
        <Text className="text-lg mt-2 text-white font-extrabold">
        <CurrencyRupeeIcon size={20} color="white" />
        <Text className="text-3xl">{basketTotal}</Text>
        </Text>
    </TouchableOpacity>
   </View>
  )
}

export default BasketIcon