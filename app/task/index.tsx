import { View, Text, Pressable } from "react-native";

export default function TaskInProgress() {
  return (
    <View className="flex h-full w-full items-center bg-[#F8F8FF] py-[5vh]">
      <View className="flex w-full flex-row items-center">
        <Pressable className="mr-2 flex-1 items-center rounded-xl bg-[#000080] p-2">
          <Text className="text-base font-semibold text-white">
            En progreso
          </Text>
        </Pressable>
        <Pressable className="mr-2 flex-1 items-center rounded-xl bg-[#0000801A] p-2">
          <Text className="text-base font-semibold text-[#000080]">
            Atrasadas
          </Text>
        </Pressable>
        <Pressable className="flex-1 items-center rounded-xl bg-[#0000801A] p-2">
          <Text className="text-base font-semibold text-[#000080]">Hechas</Text>
        </Pressable>
      </View>
    </View>
  );
}
