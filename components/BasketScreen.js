import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../slices/restaurantSlice'
import { selectBasketItems } from '../slices/basketSlice'

const BasketScreen = () => {
    const navigation=useNavigation();
    const items=useSelector(selectBasketItems);
    const dispatch=useDispatch();
    const restaurant=useSelector(selectRestaurant);
    const [groupedItemsInBasket,setGroupedItemsInBasket]=useState([]);
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    });
    useEffect(()=>{
      const groupedItems=items.reduce((results,item)=>{
        (results[item.id] = results[item.id] || []).push(item); 
        return results;    
      },{});
        setGroupedItemsInBasket(groupedItems);
    },[items]);
  return (
    <SafeAreaView>
        <View>
            <View>
                <View>
                    <Text className="text-lg font-bold text-center">Basket</Text>
                    <Text className="text-center text-gray-400">
                        {
                            restaurant.title
                        }
                    </Text>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default BasketScreen