import StandartdTextInput from "@/shared/components/StandartTextInput";
import { View, Text, TextInput } from "react-native";

const NameAndTeacher = () => {
  return (
    <View className="mt-[100px] w-[80%]">
      <Text className="text-xl font-bold">Materia</Text>
      <StandartdTextInput placeholder="Título de la tarea" />

      <Text className="text-xl font-bold">Docente</Text>
      <StandartdTextInput placeholder="Título de la tarea" />
    </View>
  );
};

export default NameAndTeacher;
