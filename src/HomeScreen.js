import { Image, SafeAreaView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from '../sanity';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories,setFeaturedCategories]=useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(()=>{
  sanityClient.fetch(`
      *[_type=="featured"]{
        ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type->
      } 
      }
`).then(data=>{
  setFeaturedCategories(data);
})
  
  },[]);
  
  console.log(featuredCategories);

  return (
    <SafeAreaView className="bg-wite pt-10 pl-2">
      <StatusBar className="bg-gray-300" />
        <View className="flex-row pb-3 items-center mx-2 space-x-2">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text>Deliver Now!</Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>

        <View className="flex-row items-center space-x-2 pb-2 mx-1 px-2">
          <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
            <MagnifyingGlassIcon color="#00ccbb" size={20} />
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon color="#00ccbb" />
        </View>
        <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom:100
        }}>
         <Categories/> 

         {featuredCategories?.map((c,index)=>{
          return (
            <FeaturedRow
            key={index}
          title={c.name}
          description={c.short_description}
          restaurants={c.restaurants}
          />
          )
         })
        }
         </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
