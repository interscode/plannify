import { View, Text, TouchableOpacity } from "react-native";

const Customization = () => {
  return (
    <View className="w-[80%] flex-row justify-between gap-x-4">
      <View className="flex-1">
        <Text className="mb-2 text-xl font-bold">Color</Text>
        <TouchableOpacity className="h-[50px] rounded-[10px] border border-[#e0e0e0] bg-[#51b15f]" />
      </View>
      <View className="flex-1">
        <Text className="mb-2 text-xl font-bold">Emoji</Text>
        <TouchableOpacity className="h-[50px] items-center justify-center rounded-[10px] border border-[#e0e0e0]">
          <Text className="text-2xl">🧑‍💻</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Customization;
