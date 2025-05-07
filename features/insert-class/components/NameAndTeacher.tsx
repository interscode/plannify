import { View, Text, TextInput } from "react-native";

const NameAndTeacher = () => {
  return (
    <View className="mt-[100] w-[80%]">
      <Text className="text-[18px] font-bold">Materia</Text>
      <TextInput
        className="mb-2 mt-2 h-[50] rounded-[10] border border-[#E0E0E0] bg-[#FAF8FB] p-3"
        placeholderTextColor="#cacaca"
        placeholder="Nombre de la materia"
      />

      <Text className="text-[18px] font-bold">Docente</Text>
      <TextInput
        className="mb-2 mt-2 h-[50] rounded-[10] border border-[#E0E0E0] bg-[#FAF8FB] p-3 py-4"
        placeholderTextColor="#cacaca"
        placeholder="Nombre del docente"
      />
    </View>
  );
};

export default NameAndTeacher;
