import { View, Text, TextInput, TouchableOpacity } from "react-native";

const SchedulePickerTask = () => {
  return (
    <View className="w-[80%]">
      <Text className="mb-2 text-lg font-bold">Entrega</Text>

      <View className="mb-2 flex-row justify-between gap-x-4">
        <View className="flex-1 flex-row">
          <TextInput
            className="flex-1 rounded-l-[10px] border border-[#e0e0e0] pl-3"
            placeholderTextColor="#cacaca"
            placeholder="dd/mm/aaaa"
          />
          <TouchableOpacity className="h-[50px] flex-[0.4] justify-center rounded-r-[10px] bg-[#000080]">
            <Text className="text-center align-middle text-4xl font-semibold text-[white]">
              ▢
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-1 flex-row">
          <TextInput
            className="flex-1 rounded-l-[10] border border-[#e0e0e0] pl-3"
            placeholderTextColor="#cacaca"
            placeholder="hh:mm"
          />
          <TouchableOpacity className="h-[50px] flex-[0.4] justify-center rounded-r-[10px] bg-[#000080]">
            <Text className="text-center align-middle text-4xl font-semibold text-[white]">
              ○
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SchedulePickerTask;
