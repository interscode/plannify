import { View, Text, TextInput } from "react-native";

const DescriptionAreaTask = () => {
  return (
    <View className="w-[80%]">
      <Text className="mb-2 text-lg font-bold">Descripción</Text>
      <TextInput
        className="h-[300px] rounded-[10] border border-[#e0e0e0] px-3 align-top"
        placeholderTextColor="#cacaca"
        placeholder="Agrega una descripción"
      />
    </View>
  );
};

export default DescriptionAreaTask;
