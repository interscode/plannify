import { View, Text, TextInput } from "react-native";

const TitleClassTask = () => {
    return(
        <View className="mt-[100] w-[80%]">
            <Text className="text-lg font-bold">Título</Text>
            <TextInput className="mb-2 mt-2 h-[50] rounded-[10] border border-[#E0E0E0] bg-[#FAF8FB] p-3" placeholderTextColor="#cacaca" placeholder="Título de la tarea" />
            
            <Text className="text-lg font-bold">Materia</Text>
            <TextInput className="mb-2 mt-2 h-[50] rounded-[10] border border-[#E0E0E0] bg-[#FAF8FB] p-3" placeholderTextColor="#cacaca" placeholder="Selecciona una materia ↕" />
        </View>
    );
}

export default TitleClassTask;