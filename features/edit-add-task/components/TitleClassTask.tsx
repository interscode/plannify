import StandartdTextInput from "@/shared/components/StandartTextInput";
import { View, Text, TextInput } from "react-native";

const TitleClassTask = () => {
    return(
        <View className="mt-[100] w-[80%]">
            <Text className="text-lg font-bold">Título</Text>
            <StandartdTextInput placeholder="Título de la tarea" />
            
            <Text className="text-lg font-bold">Materia</Text>
            <StandartdTextInput placeholder="Nombre del docente" />
        </View>
    );
}

export default TitleClassTask;