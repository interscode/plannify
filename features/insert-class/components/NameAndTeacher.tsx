import { View, Text, TextInput } from "react-native";

const NameAndTeacher = () => {
    return(
        <View className="w-[80%] mt-[100]">
            <Text className="text-[18px] font-bold">Materia</Text>
            <TextInput
                className="h-[50] bg-[#FAF8FB] border border-[#E0E0E0] rounded-[10] p-3 mt-2 mb-2"
                placeholderTextColor='#cacaca'
                placeholder="Nombre de la materia"
            />

            <Text className="text-[18px] font-bold">Docente</Text>
            <TextInput
                className="h-[50] bg-[#FAF8FB] border border-[#E0E0E0] rounded-[10] p-3 py-4 mt-2 mb-2"
                placeholderTextColor='#cacaca'
                placeholder="Nombre del docente"
            />
        </View>
    );
}

export default NameAndTeacher;