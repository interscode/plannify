import { View, Text, TouchableOpacity, TextInput } from "react-native";

const ScheduleSection = () => {
  return (
    <View className="w-[80%]">
      <Text className="mb-2 mt-2 text-xl font-bold">Horario</Text>

      <View>
        <TextInput
          className="h-[50px] rounded-t-[10px] border border-[#e0e0e0] bg-[#faf8fb] p-3"
          placeholderTextColor="#cacaca"
          placeholder="Salón donde se imparte la clase"
        />
        <View className="flex-row">
          <Text className="h-[101px] flex-1 rounded-bl-[10px] border border-[#e0e0e0] bg-[#faf8fb] p-3 align-middle">
            Lunes ↕
          </Text>
          <View className="flex-1">
            <View className="flex-row">
              <TextInput
                className="h-[50px] flex-1 border border-[#e0e0e0] bg-[#faf8fb] p-3"
                placeholderTextColor="#cacaca"
                placeholder="De:"
              />
              <TouchableOpacity className="h-[50px] flex-[0.4] justify-center bg-[#000080]">
                <Text className="text-center align-middle text-4xl font-semibold text-[white]">
                  ○
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row">
              <TextInput
                className="h-[50px] flex-1 border border-[#e0e0e0] bg-[#faf8fb] p-3"
                placeholderTextColor="#cacaca"
                placeholder="a:"
              />
              <TouchableOpacity className="h-[50] flex-[0.4] justify-center rounded-br-[10px] bg-[#000080]">
                <Text className="text-center align-middle text-4xl font-semibold text-[white]">
                  ○
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity className="mt-[10px] aspect-square w-[15%] justify-center self-end rounded-full bg-[#00008099]">
        <Text className="text-center text-4xl font-medium text-[white]">+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScheduleSection;
