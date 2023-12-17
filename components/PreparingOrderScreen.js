import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

const PreparingOrderScreen = () => {
    const navigation=useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("Delivery");
        },4000);
    })
  return (
    <SafeAreaView className="bg-[#00ccbb] px-2 flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/animation.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-40 w-40"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white"/>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
