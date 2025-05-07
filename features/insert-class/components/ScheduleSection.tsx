import { View, Text, TouchableOpacity, TextInput } from "react-native";

const ScheduleSection = () => {
  return (
    <View className="w-[80%]">
      <Text className="text-[18px] font-bold">Horario</Text>

      <View>
        <TextInput
          className="h-[50] rounded-t-[10] border border-[#E0E0E0] bg-[#FAF8FB] p-3"
          placeholderTextColor="#cacaca"
          placeholder="Salón donde se imparte la clase"
        />
        <View className="flex-row">
          <Text className="h-[101] flex-1 rounded-bl-[10] border border-[#E0E0E0] bg-[#FAF8FB] p-3 align-middle">
            Lunes ↕
          </Text>
          <View className="flex-1">
            <View className="flex-row">
              <TextInput
                className="h-[50] flex-1 border border-[#E0E0E0] bg-[#FAF8FB] p-3"
                placeholderTextColor="#cacaca"
                placeholder="De:"
              />
              <TouchableOpacity className="h-[50] flex-[0.4] bg-[#000080]">
                <Text className="text-center align-middle text-[30px] font-semibold text-[white]">
                  ○
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row">
              <TextInput
                className="h-[50] flex-1 border border-[#E0E0E0] bg-[#FAF8FB] p-3"
                placeholderTextColor="#cacaca"
                placeholder="a:"
              />
              <TouchableOpacity className="h-[50] flex-[0.4] rounded-br-[10] bg-[#000080]">
                <Text className="text-center align-middle text-[30px] font-semibold text-[white]">
                  ○
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity className="mt-[10px] aspect-square w-[15%] items-center justify-center self-end rounded-full bg-[#00008099]">
        <Text className="text-[30px] font-medium text-[white]">+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScheduleSection;
