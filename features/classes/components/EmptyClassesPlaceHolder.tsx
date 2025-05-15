import { View, Text, Image, TouchableOpacity } from "react-native";

const EmptyClassesPlaceHolder = () => {
  return (
    <View className="flex-1 items-center w-full">
      <Text className="pt-1 font-semibold text-[#c0c0c0]">
        Aún no has añadido materias
      </Text>
      <View className="flex-1 justify-center">
        <Image source={require("@/assets/logo-light-gray.png")} />
      </View>
    </View>
  );
};

export default EmptyClassesPlaceHolder;
