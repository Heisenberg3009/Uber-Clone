import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const onBoarding = () => {
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
    </SafeAreaView>
  );
};

export default onBoarding;
