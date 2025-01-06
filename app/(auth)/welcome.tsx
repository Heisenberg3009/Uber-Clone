import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { useRef } from "react";

const onBoarding = () => {

  const swiperRef = useRef<Swiper>(null);

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          router.replace("(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip!</Text>
      </TouchableOpacity>
      <Swiper ref={swiperRef}
        loop={false}
        dot = {<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0]"/>}
      >

      </Swiper>
    </SafeAreaView>
  );
};

export default onBoarding;
