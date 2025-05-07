import { View, Text, TouchableOpacity } from "react-native";

const Customization = () => {
  return (
    <View className="mb-2 w-[80%] flex-row justify-between gap-x-4">
      <View className="flex-1">
        <Text className="text-[18px] font-bold">Color</Text>
        <TouchableOpacity className="h-[50] rounded-[10] border border-[#e0e0e0] bg-[#51B15F]" />
      </View>
      <View className="flex-1">
        <Text className="text-[18px] font-bold">Emoji</Text>
        <TouchableOpacity className="h-[50] items-center justify-center rounded-[10] border border-[#e0e0e0]">
          <Text className="text-[20px]">🧑‍💻</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Customization;
