import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import {
  CurrencyRupeeIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
 import { urlFor } from "../sanity";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from "../slices/basketSlice";

const DishRow = ({ id, name, price, description, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items=useSelector((s)=>selectBasketItemsWithId(s,id));
  const dispatch= useDispatch();

  const addItemsToBasket=()=>{
    dispatch(addToBasket({id, name, price, description, image}));

  }
  
  const removeItemsFromBasket=()=>{
    if(items.length<=0) return;
    dispatch(removeFromBasket({id}));

  }
  
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setIsPressed(!isPressed);
        }}
        className={`bg-white p-4 border border-gray-200 ${isPressed && "border-b-0" }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              <CurrencyRupeeIcon size={20} color="gray" opacity={0.4} />
              {price}
            </Text>
          </View>

          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              source={{
                uri: urlFor(image).url(),
              }}
              className="w-20 h-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity disabled={!items.length}>
              <MinusCircleIcon 
              onPress={()=>{
                removeItemsFromBasket()
              }}
              size={40} color={items.length>0?"#00ccbb":"gray"} />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity>
              <PlusCircleIcon onPress={()=>{
                addItemsToBasket()
              }} color="#00ccbb" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
